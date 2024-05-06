import { getCurrentUser } from '@/lib/supabase/user.actions'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const { data: { user } } = await getCurrentUser()
  if (user?.id) return redirect('/dashboard')
  return (
    <main className="flex justify-between">
        <div className="flex-1">
          {children}
        </div>
        <div className="flex-1 hidden md:flex">
          <Image
            src='/images/welcome-4.png'
            alt={'Sign In | Up'}
            quality={100}
            width={500}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>
    </main>
  )
}

export default RootLayout