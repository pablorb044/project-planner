import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Añadir automáticamente la clave de acceso a las peticiones.
api.interceptors.request.use((config) => {
  const accessKey = sessionStorage.getItem('project_access_key')

  if (accessKey) {
    config.headers.set('Authorization', `Bearer ${accessKey}`)
  }

  return config
})
