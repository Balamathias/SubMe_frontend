'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'

const TopNavbar = () => {
  return (
    <div className='md:hidden flex fixed top-0 z-20 h-12 justify-between w-full p-3'>
        <Link href='/dashboard'>
            <Image
            src='/vitals/logo-192.png'
            alt='Logo'
            width={40}
            height={40}
            quality={100}
            className="h-10 w-10 ml-4 object-contain"
            />
        </Link>

        <nav className="flex flex-col items-center justify-center">
            <Button size={'icon'} variant={'ghost'}>
                <ArrowRightCircle size={26} className='text-rose-800 font-semibold' />
            </Button>
        </nav>
    </div>
  )
}

export default TopNavbar