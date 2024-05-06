import { Tables } from '@/database.types'
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon, Share2Icon } from 'lucide-react'
import { Button } from '../ui/button'
import DashboardSearch from './DashboardSearch'

const RightSidebar = ({ user }: { user: Tables<'users'>}) => {
  return (
    <div className='xl:flex flex-col justify-between hidden w-[300px] p-4 border-l-2 border-dashed min-h-screen overflow-hidden'>
        <DashboardSearch />

        <footer className="flex flex-col gap-3 py-4">
          <Button className='bg-gradient from-yellow-400 to bg-yellow-600 text-white flex items-center'>
            <Share2Icon size={15} className='mr-2'/>
            Invite & Earn
          </Button>
        </footer>
    </div>
  )
}

export default RightSidebar