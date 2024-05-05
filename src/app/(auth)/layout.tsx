import Image from 'next/image'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex justify-between">
        <div className="flex-1">
          {children}
        </div>
        <div className="flex-1 hidden md:flex">
          <Image
            src='/svg/sign-in.svg'
            alt={'Sign In | Up'}
            quality={100}
            width={500}
            height={500}
            className='w-full h-full'
          />
        </div>
    </main>
  )
}

export default RootLayout