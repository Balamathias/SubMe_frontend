'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

const DashboardSearch = ({}) => {
    const [focused, setFocused] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

  return (
    <div className="flex flex-col space-y-2 overflow-auto">
        <div className="h-10 w-full bg-secondary rounded-lg flex items-center">
            <Input placeholder='Search...' onBlurCapture={() => setFocused(false)} onChange={e => setQuery(e.target.value)} onFocus={() => setFocused(true)} className='border-none focus:border-none active:border-none h-full w-full focus-visible:ring-0' />
            <SearchIcon className='text-muted-foreground h-full mr-1.5' size={15}/>
        </div>

        { focused && (
            <div className='flex flex-col gap-3'>
                {!query && !results.length && (
                    <div className='flex flex-col space-y-3 items-center justify-center h-full py-5'>
                        <Image 
                            src='/glass/images/search-globe.png' 
                            width={90} 
                            height={90} 
                            alt='Search Anything' 
                            className='object-cover'
                        />
                        <div className='flex flex-col gap-2 items-center justify-center text-sm'>
                            <p className='text-sm text-muted-foreground'>Search for anything</p>
                        </div>
                    </div>
                )}
            </div>
        )}
    </div>
  )
}

export default DashboardSearch