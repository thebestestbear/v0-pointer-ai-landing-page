export function ForgeLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Anvil base shape */}
      <path d="M6 36H42L38 42H10L6 36Z" fill="currentColor" opacity="0.9" />
      {/* Anvil middle section */}
      <path d="M10 30H38V36H6L10 30Z" fill="currentColor" opacity="0.7" />
      {/* Anvil top / working surface forming the base of F */}
      <path d="M8 24H40V30H10L8 24Z" fill="currentColor" />
      {/* F letter - vertical stem rising from anvil */}
      <path d="M14 6H22V24H14V6Z" fill="currentColor" />
      {/* F letter - top horizontal bar */}
      <path d="M14 6H36V12H14V6Z" fill="currentColor" />
      {/* F letter - middle horizontal bar */}
      <path d="M14 14H30V19H14V14Z" fill="currentColor" opacity="0.9" />
    </svg>
  )
}
