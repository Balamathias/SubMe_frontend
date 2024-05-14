'use client'

import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { signOut } from '@/lib/supabase/user.actions'

const SignoutButton = () => {
  return (
    <Button onClick={ async () => await signOut()} size='sm' variant='destructive' className='flex items-center gap-1.5 border-none shadow-none'>
        Logout <ArrowRight size={16} className='text-rose-50'/>
    </Button>
  )
}

export default SignoutButton