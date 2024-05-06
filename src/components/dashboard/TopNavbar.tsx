import Image from 'next/image'
import React from 'react'
import Avatar from '../Avatar'
import { getUser } from '@/lib/supabase/accounts'
import Link from 'next/link'

const TopNavbar = async() => {
    const { data: accountData } = await getUser()
  return (
    <div className='md:hidden flex fixed top-0 z-20 h-16 justify-between bg-secondary dark:bg-slate-950 items-center w-full p-3 border-b-2 border-dotted shadom-sm'>
        <Link href='/dashboard'>
            <Image
            src='/vitals/logo-192.png'
            alt='Logo'
            width={50}
            height={50}
            quality={100}
            className="h-10 w-10 ml-4 object-contain"
            />
        </Link>

        <nav className="flex flex-col items-center justify-center">
            <Avatar name={accountData?.username || ''} />
        </nav>
    </div>
  )
}

export default TopNavbar