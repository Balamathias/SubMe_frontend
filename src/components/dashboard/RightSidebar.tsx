import { Tables } from '@/database.types'
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'

const RightSidebar = ({ user }: { user: Tables<'users'>}) => {
  return (
    <div className='xl:flex flex-col justify-between hidden w-[300px] p-4 border-l-2 border-dashed min-h-screen overflow-hidden'>
        <div className="flex flex-col space-y-2 overflow-auto">
            <div className="h-10 w-full bg-secondary rounded-lg flex items-center">
                <Input placeholder='Search...' className='border-none focus:border-none active:border-none h-full w-full focus-visible:ring-0' />
                <SearchIcon className='text-muted-foreground h-full mr-1.5' size={15}/>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar