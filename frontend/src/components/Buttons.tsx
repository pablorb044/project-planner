
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function PrimaryDarkButton({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#1d3045] px-5 py-2.5 text-sm font-semibold text-[#f7f5ef] transition-colors hover:bg-[#30475e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a58a5b] active:bg-[#17283a] disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function GoldExpeditionButton({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#b18c58] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9c7848] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d3045] active:bg-[#89683e] disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function OutlineGoldButton({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#b18c58] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#1d3045] transition-colors hover:bg-[#b18c58]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d3045] active:bg-[#b18c58]/20 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
