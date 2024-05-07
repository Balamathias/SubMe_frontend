import { Tables } from '@/database.types'
import React from 'react'
import DashboardSearch from './DashboardSearch'
import ShareInvite from './ShareInvite'
import clsx, { ClassValue } from 'clsx'

const RightSidebar = ({ user, className }: { user: Tables<'users'>, className?: ClassValue}) => {
  return (
    <div className={clsx('xl:flex flex-col justify-between hidden max-w-[250px] xl:w-[300px] p-4 border-l-2 border-dashed min-h-screen overflow-hidden', className)}>
        <DashboardSearch />

        <footer className="flex flex-col gap-3 py-4">
          <ShareInvite />
        </footer>
    </div>
  )
}

export default RightSidebar