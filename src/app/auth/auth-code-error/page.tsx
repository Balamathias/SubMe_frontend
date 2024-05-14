import WidthWrapper from '@/components/WidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <WidthWrapper>
      <div className="h-screen overflow-hidden w-full flex items-center justify-center flex-col">
        <Image src="/glass/images/clip.png" width={150} height={150} className='object-cover' alt="Error" />
        <p className="text-lg text-muted-foreground text-center my-2">Seems like the link you followed has expired, Please try again...</p>
        <Link className={buttonVariants()} href={'/sign-in'}>Return to Sign In</Link>
      </div>
    </WidthWrapper>
  )
}

export default ErrorPage