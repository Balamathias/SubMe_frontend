import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const GoogleAuthButton = () => {
  return (
    <Button 
        className='flex items-center justify-center space-x-2 w-full my-4 py-4'
        variant={'outline'}
    >
        <Image 
        src={'/glass/icons/google-flat.png'}
        alt='Google'
        width={20}
        height={20}
        quality={100}
        className='object-cover'
        />
        <span className="text-muted-foreground">Continue with Google</span>
    </Button>
  )
}

export default GoogleAuthButton