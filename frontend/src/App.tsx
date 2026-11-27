
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Check, Copy, KeyRound, AlertTriangle } from 'lucide-react'

import './App.css'
import Hero from './components/landing/Hero'
import { HeroValueStrip } from './components/HeroValueStrip'
import { PlanningPipeline } from './components/PlanningPipeline'
import { Footer } from './components/Footer'
import Workspace from './components/workspace/Workspace'
import { api } from './services/api'

interface ProjectCreateResponse {
  project_id: string
  access_key: string
}

interface ProjectAccessResponse {
  project_id: string
}

type ModalState =
  | { type: 'key'; accessKey: string }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string }
  | null

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const detail = error.response?.data?.detail

    if (typeof detail === 'string') {
      return detail
    }

    if (Array.isArray(detail)) {
      return 'The access key format is invalid. Please check your key and try again.'
    }

    return 'No se ha podido conectar con el servidor.'
  }

  return 'Ha ocurrido un error inesperado.'
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  const [modal, setModal] = useState<ModalState>(null)
  const [isBusy, setIsBusy] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [copied, setCopied] = useState(false)
  const [projectId, setProjectId] = useState<string | null>(null)

  // Recuperar y verificar el proyecto al entrar en /workspace.
  useEffect(() => {
    if (location.pathname !== '/workspace') return

    let cancelled = false

    async function verifyProjectAccess() {
      const accessKey = sessionStorage.getItem('project_access_key')

      if (!accessKey) {
        navigate('/', { replace: true })
        return
      }

      setIsVerifying(true)

      try {
        const response = await api.get<ProjectAccessResponse>('/projects/me')

        if (!cancelled) {
          setProjectId(response.data.project_id)
        }
      } catch {
        if (!cancelled) {
          sessionStorage.removeItem('project_access_key')
          setProjectId(null)
          navigate('/', { replace: true })
        }
      } finally {
        if (!cancelled) {
          setIsVerifying(false)
        }
      }
    }

    verifyProjectAccess()

    return () => {
      cancelled = true
    }
  }, [location.pathname, navigate])

  async function handleCreateProject() {
    if (isBusy) return

    setIsBusy(true)

    try {
      const response = await api.post<ProjectCreateResponse>('/projects')
      const { access_key, project_id } = response.data

      sessionStorage.setItem('project_access_key', access_key)
      setProjectId(project_id)

      setCopied(false)
      setModal({
        type: 'key',
        accessKey: access_key,
      })
    } catch (error) {
      setModal({
        type: 'error',
        message: getErrorMessage(error),
      })
    } finally {
      setIsBusy(false)
    }
  }

  async function handleAccessProject(projectKey: string) {
    if (isBusy) return

    setIsBusy(true)

    try {
      await api.post<ProjectAccessResponse>('/projects/access', {
        access_key: projectKey,
      })

      sessionStorage.setItem('project_access_key', projectKey)

      const response = await api.get<ProjectAccessResponse>('/projects/me')
      setProjectId(response.data.project_id)

      setModal({
        type: 'success',
        message: 'Your project access has been verified successfully.',
      })
    } catch (error) {
      sessionStorage.removeItem('project_access_key')
      setProjectId(null)

      setModal({
        type: 'error',
        message: getErrorMessage(error),
      })
    } finally {
      setIsBusy(false)
    }
  }

  function handleContinueToWorkspace() {
    setModal(null)
    setIsVerifying(true)
    navigate('/workspace')
  }

  async function handleCopyKey() {
    if (modal?.type !== 'key') return

    try {
      await navigator.clipboard.writeText(modal.accessKey)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                onCreateProject={handleCreateProject}
                onAccessProject={handleAccessProject}
              />

              <HeroValueStrip />
              <PlanningPipeline />
              <Footer />
            </>
          }
        />

        <Route
          path="/workspace"
          element={
            isVerifying || !projectId ? (
              <main className="flex min-h-screen items-center justify-center bg-[#f7f5ef]">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#e3e0d7] border-t-[#1d3045]" />

                  <p className="text-sm font-medium text-[#1d3045]">
                    Recovering your project...
                  </p>
                </div>
              </main>
            ) : (
              <Workspace projectId={projectId} />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {isBusy && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="rounded-xl bg-[#f7f5ef] px-8 py-6 text-center shadow-xl">
            <div className="mx-auto mb-3 h-7 w-7 animate-spin rounded-full border-2 border-[#e3e0d7] border-t-[#1d3045]" />

            <p className="text-sm font-medium text-[#1d3045]">
              Connecting to your project...
            </p>
          </div>
        </div>
      )}

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#172536]/65 p-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="my-auto w-full max-w-lg rounded-xl border border-[#e3e0d7] bg-[#f7f5ef] p-6 shadow-2xl sm:p-8"
          >
            {modal.type === 'key' && (
              <>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eee6d7] text-[#8b7657]">
                    <KeyRound size={22} />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7657]">
                    Project access
                  </span>
                </div>

                <h2
                  id="modal-title"
                  className="mb-3 font-serif text-3xl text-[#1d3045]"
                >
                  Your project key
                </h2>

                <p className="mb-5 leading-relaxed text-[#555b60]">
                  Your project has been created successfully. This key is the
                  only way to access it again. Make sure you save it somewhere
                  safe before continuing.
                </p>

                <div className="mb-5 rounded-lg border border-[#d8c9ad] bg-[#eeece4] p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#777a78]">
                    Your private access key
                  </p>

                  <p className="break-all font-mono text-sm leading-relaxed text-[#1d3045]">
                    {modal.accessKey}
                  </p>

                  <button
                    type="button"
                    onClick={handleCopyKey}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[#a58a5b] px-4 py-2.5 text-sm font-semibold text-[#1d3045] transition-colors hover:bg-[#e5ddce]"
                  >
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                    {copied ? 'Copied to clipboard' : 'Copy access key'}
                  </button>
                </div>

                <div className="mb-6 flex gap-3 rounded-lg bg-[#eee6d7] p-4">
                  <AlertTriangle
                    size={20}
                    className="mt-0.5 shrink-0 text-[#8b7657]"
                  />

                  <p className="text-sm leading-relaxed text-[#514a40]">
                    <strong>Important:</strong> This is the only time your
                    access key will be shown. If you lose it, your project
                    cannot be recovered.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleContinueToWorkspace}
                  className="w-full rounded-md bg-[#1d3045] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#30475e]"
                >
                  Continue to your project
                </button>
              </>
            )}

            {modal.type === 'success' && (
              <>
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e2e9e2] text-[#557963]">
                  <Check size={23} />
                </div>

                <h2
                  id="modal-title"
                  className="mb-3 font-serif text-2xl text-[#1d3045]"
                >
                  Project access verified
                </h2>

                <p className="pb-8 leading-relaxed text-[#555b60]">
                  {modal.message}
                </p>

                <button
                  type="button"
                  onClick={handleContinueToWorkspace}
                  className="w-full rounded-md bg-[#1d3045] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#30475e]"
                >
                  Continue
                </button>
              </>
            )}

            {modal.type === 'error' && (
              <>
                <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e2df] text-[#a85d52]">
                  <AlertTriangle size={23} />
                </div>

                <h2
                  id="modal-title"
                  className="mb-4 font-serif text-2xl text-[#1d3045]"
                >
                  Something went wrong
                </h2>

                <p className="pb-8 leading-relaxed text-[#555b60]">
                  {modal.message}
                </p>

                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="w-full rounded-md bg-[#1d3045] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#30475e]"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default App
