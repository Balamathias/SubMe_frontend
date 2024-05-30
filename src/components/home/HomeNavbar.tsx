import { getUser } from '@/lib/supabase/accounts'
import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import clsx from 'clsx'
import SignoutButton from '../SignoutButton'

const HomeNavbar = async () => {
    const { data: user } = await getUser()
  return (
    <nav className='w-full h-20 flex items-center p-4 bg-slate-950/[0.95] z-50 '>
        <div className='max-w-7xl mx-auto w-full flex justify-between items-center'>
            <Link href='/' className="flex items-center gap-2">
                <Image 
                    src={'/vitals/logo-192.png'}
                    alt='SubMe Logo'
                    width={20}
                    height={20}
                    quality={100}
                    className='object-cover h-8 w-8'
                />
                <span className="text-primary font-semibold">SubMe</span>
            </Link>

            <div className="flex items-center gap-2.5">
                {
                    user ? (<>

                        <SignoutButton  className='p-6 text-white px-8 rounded-full bg-gradient bg-gradient-to-l rounded-full bg-gradient bg-gradient-to-l from-violet-500 via-purple-600 to-amber-600' />
                    
                    </>) : (
                        <>
                            <Link href={'/sign-in'} className={clsx(buttonVariants({}), 'text-white p-6 px-8 !rounded-full bg-gradient bg-gradient-to-l rounded-full bg-gradient bg-gradient-to-l from-violet-500 via-purple-600 to-amber-600')}>Sign in</Link>
                            <Link href={'/sign-up'} className={clsx(buttonVariants({variant: 'secondary'}), 'text-white max-sm:hidden p-6 px-8 !rounded-full bg-gradient bg-gradient-to-l rounded-full bg-gradient bg-gradient-to-l from-violet-500 via-purple-600 to-amber-600')}>Sign up</Link>
                        </>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

export default HomeNavbar