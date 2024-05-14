import { getUser } from '@/lib/supabase/accounts'
import Image from 'next/image'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import clsx from 'clsx'

const HomeNavbar = async () => {
    const { data: user } = await getUser()
  return (
    <nav className='w-full fixed top-0 left-0 h-20 flex items-center justify-between p-4 bg-background'>
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

                    <Button variant={'destructive'} size={'sm'}>Sign out</Button>
                
                </>) : (
                    <>
                        <Link href={'/sign-in'} className={clsx(buttonVariants({}))}>Sign in</Link>
                        <Link href={'/sign-up'} className={clsx(buttonVariants({variant: 'secondary'}), 'max-sm:hidden')}>Sign up</Link>
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default HomeNavbar