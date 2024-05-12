'use client'

import { Tables } from '@/database.types'
import React from 'react'
import DashboardSearch from './DashboardSearch'
import ShareInvite from './ShareInvite'
import clsx, { ClassValue } from 'clsx'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { signOut } from '@/lib/supabase/user.actions'

const RightSidebar = ({ user, className }: { user: Tables<'users'>, className?: ClassValue}) => {
  return (
    <div className={clsx('xl:flex flex-col justify-between min-h-[85vh] hidden p-4 border-l-2 border-dashed h-full xl:min-h-screen overflow-hidden', className)}>
        <DashboardSearch />

        <footer className="flex flex-col gap-3 py-4 lg:mb-10">
          <ShareInvite user={user} />

          <Button onClick={ async () => await signOut()} size='sm' variant='destructive' className='flex items-center gap-1.5 border-none shadow-none'>
              Logout <ArrowRight size={16} className='text-rose-50'/>
          </Button>
        </footer>
    </div>
  )
}

export default RightSidebar