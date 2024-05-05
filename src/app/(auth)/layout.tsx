import { getCurrentUser } from '@/lib/supabase/user.actions'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const supabase = createClient()
  const {data} = await supabase.auth.getSession()
  if (data?.session) return redirect('/dashboard')
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