import { Tables } from '@/database.types'
import React from 'react'
import DashboardSearch from './DashboardSearch'
import ShareInvite from './ShareInvite'
import clsx, { ClassValue } from 'clsx'

const RightSidebar = ({ user, className }: { user: Tables<'users'>, className?: ClassValue}) => {
  return (
    <div className={clsx('xl:flex flex-col justify-between min-h-[85vh] hidden p-4 border-l-2 border-dashed h-full xl:min-h-screen overflow-hidden', className)}>
        <DashboardSearch />

        <footer className="flex flex-col gap-3 py-4 lg:mb-16">
          <ShareInvite />
        </footer>
    </div>
  )
}

export default RightSidebar