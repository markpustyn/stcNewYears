"use client"

import Image from "next/image"

type HeaderProps = {
  isDark: boolean
}

function Header({ isDark }: HeaderProps) {
  return (
    <header className="w-full max-w-6xl px-2 sm:px-0 pt-2 sm:pt-4">
      <div className="flex items-center gap-3 min-w-0">
        <Image
          src="/logo.png"
          alt="STC logo"
          width={64}
          height={64}
          className="h-14 w-14 sm:h-16 sm:w-16 shrink-0"
          priority
        />

        <h1
          className={[
            "min-w-0 font-semibold leading-tight",
            "text-[20px] sm:text-2xl",
            "whitespace-normal sm:whitespace-nowrap",
            "break-words",
            isDark ? "text-white" : "text-zinc-900",
          ].join(" ")}
        >
          2026 New Years Celebration
        </h1>
      </div>
    </header>
  )
}

export default Header
