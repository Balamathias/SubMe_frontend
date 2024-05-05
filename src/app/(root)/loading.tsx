import WidthWrapper from '@/components/WidthWrapper'
import { LoaderIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <WidthWrapper className="w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="flex flex-col items-center">
            <Image src="/vitals/logo-192.png" width={30} height={30} alt="SubMe Logo" />
            <div className="mt-4 text-primary text-lg font-semibold flex items-center gap-2"><LoaderIcon className='animate-spin' /> Loading...</div>
        </div>
    </WidthWrapper>
  )
}

export default Loading