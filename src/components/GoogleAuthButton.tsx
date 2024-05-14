'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { toast } from 'sonner'
import { LoaderIcon } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import { signInWithOAuth } from '@/lib/supabase/user.actions'

const GoogleAuthButton = () => {
  const [pending, setPending] = useState(false)
  // const supabase = createClient()
  const handleSignIn = async () => {
    try {
      setPending(true)
      // await supabase.auth.signInWithOAuth({provider: 'google'})
      await signInWithOAuth('google')
    } catch (error) {
      console.error(error)
      toast.error('Sign In failed, please try again.')
      setPending(false)
    } finally {
      setPending(false)
    }
  }
  return (
    <Button 
        className='flex items-center justify-center space-x-2 w-full my-4 py-4'
        variant={'outline'}
        onClick={handleSignIn}
    >
        {
          pending && <LoaderIcon className='animate-spin' />
        }
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