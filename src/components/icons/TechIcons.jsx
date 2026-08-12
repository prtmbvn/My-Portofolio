'use client'

export function ReactIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function NextjsIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="currentColor" className="text-gray-900 dark:text-white" />
      <path d="M18.8 19.4L9.4 6.8H7.6V17.2H9.4V9.6L17.2 20.1C17.7 19.9 18.3 19.7 18.8 19.4Z" fill="currentColor" className="text-white dark:text-black" />
      <path d="M16.4 6.8H14.6V17.2H16.4V6.8Z" fill="currentColor" className="text-white dark:text-black" />
    </svg>
  )
}

export function TypescriptIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M11.5 13.5H13.8M13.8 13.5V20M13.8 13.5H16.1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 14C8.2 13.6 7.6 13.5 7 13.7C6.3 13.9 6 14.5 6.2 15.1C6.4 15.7 7.4 16.2 8.1 16.5C8.8 16.8 9.5 17.5 9.2 18.4C8.9 19.3 7.8 19.6 6.8 19.4C6 19.2 5.4 18.6 5 18" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function JavascriptIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M13.2 18.5C13.8 19.2 14.6 19.5 15.6 19.5C16.9 19.5 17.8 18.8 17.8 17.4C17.8 14.5 13.5 15.3 13.5 12.3C13.5 10.7 14.9 9.5 17 9.5C18.1 9.5 19.1 9.9 19.7 10.7L18.4 11.9C18 11.3 17.5 11.1 17 11.1C16.3 11.1 15.7 11.5 15.7 12.2C15.7 14.8 20 13.9 20 17.3C20 19.7 18.2 21 15.6 21C14 21 12.7 20.3 11.9 19.1L13.2 18.5ZM7.5 19.7C6.7 19.7 6.1 19.4 5.6 18.5L7 17.5C7.2 17.9 7.4 18.1 7.8 18.1C8.2 18.1 8.5 17.9 8.5 17.1V9.7H10.7V17.3C10.7 18.9 9.6 19.7 7.5 19.7Z" fill="#000000" />
    </svg>
  )
}

export function TailwindIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
    </svg>
  )
}

export function LaravelIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.6 6.8L12.4 0.3C12.1 0.1 11.8 0.1 11.5 0.3L0.3 6.8C0.1 6.9 0 7.2 0 7.5V20.5C0 20.8 0.1 21.1 0.4 21.2L11.6 27.7C11.7 27.8 11.9 27.8 12 27.8C12.1 27.8 12.3 27.8 12.4 27.7L23.6 21.2C23.9 21 24 20.8 24 20.5V7.5C24 7.2 23.9 6.9 23.6 6.8Z" fill="#FF2D20" />
      <path d="M12 3.2L19.8 7.7L12 12.2L4.2 7.7L12 3.2Z" fill="#FFFFFF" fillOpacity="0.3" />
    </svg>
  )
}

export function PhpIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
      <text x="12" y="14" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PHP</text>
    </svg>
  )
}

export function VueIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3H5.5L12 14.5L18.5 3H22L12 21L2 3Z" fill="#41B883" />
      <path d="M6.5 3H9.5L12 7.5L14.5 3H17.5L12 13L6.5 3Z" fill="#35495E" />
    </svg>
  )
}

export function NodeIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.8L2.5 7.3V18.3L12 23.8L21.5 18.3V7.3L12 1.8Z" fill="#339933" />
      <path d="M12 4.5L18.5 8.3V15.7L12 19.5L5.5 15.7V8.3L12 4.5Z" fill="#FFFFFF" fillOpacity="0.2" />
    </svg>
  )
}

export function MysqlIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#00758F" />
      <text x="12" y="15" fill="#F29111" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">MySQL</text>
    </svg>
  )
}

export function PostgresIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#336791" />
      <text x="12" y="15" fill="white" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PGSQL</text>
    </svg>
  )
}

export function OracleIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="7" fill="#F80000" />
      <rect x="6" y="8" width="12" height="8" rx="4" fill="white" />
      <rect x="8" y="10" width="8" height="4" rx="2" fill="#F80000" />
    </svg>
  )
}

export function PythonIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8 2C6.9 2 7.2 4.1 7.2 4.1V6.3H12.1V7H5.2C5.2 7 2 6.6 2 11.5C2 16.4 4.7 16.2 4.7 16.2H6.3V14.1C6.3 14.1 6.2 11.5 8.9 11.5H13.7C13.7 11.5 16.1 11.5 16.1 9.1V4.4C16.1 4.4 16.6 2 11.8 2ZM9.4 3.5C9.9 3.5 10.3 3.9 10.3 4.4C10.3 4.9 9.9 5.3 9.4 5.3C8.9 5.3 8.5 4.9 8.5 4.4C8.5 3.9 8.9 3.5 9.4 3.5Z" fill="#3776AB" />
      <path d="M12.2 22C17.1 22 16.8 19.9 16.8 19.9V17.7H11.9V17H18.8C18.8 17 22 17.4 22 12.5C22 7.6 19.3 7.8 19.3 7.8H17.7V9.9C17.7 9.9 17.8 12.5 15.1 12.5H10.3C10.3 12.5 7.9 12.5 7.9 14.9V19.6C7.9 19.6 7.4 22 12.2 22ZM14.6 20.5C14.1 20.5 13.7 20.1 13.7 19.6C13.7 19.1 14.1 18.7 14.6 18.7C15.1 18.7 15.5 19.1 15.5 19.6C15.5 20.1 15.1 20.5 14.6 20.5Z" fill="#FFD43B" />
    </svg>
  )
}
