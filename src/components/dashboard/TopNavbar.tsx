'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'

const TopNavbar = () => {
  return (
    <div className='md:hidden flex fixed top-0 z-20 h-10 justify-between'>
        <Link href='/dashboard'>
            <Image
            src='/vitals/logo-192.png'
            alt='Logo'
            width={40}
            height={40}
            quality={100}
            className="h-8 w-8 ml-4 object-contain"
            />
        </Link>

        <nav className="flex flex-col items-center justify-center">
            <Button size={'icon'} variant={'ghost'}>
                <ArrowRightCircle size={12} className='text-rose-800' />
            </Button>
        </nav>
    </div>
  )
}

export default TopNavbar