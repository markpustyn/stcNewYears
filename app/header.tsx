import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <div>      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 w-full max-w-4xl">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="STC logo" width={80} height={80} className="sm:w-20 sm:h-20" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
            2026 New Years Celebration
          </h1>
        </div>
        <Link href="/uk">
          <Button className="w-full sm:w-auto">
            Український
          </Button>
        </Link>
      </div></div>
  )
}

export default Header