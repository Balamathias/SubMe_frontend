'use client'

import WidthWrapper from '@/components/WidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { resetPasswordForEmail } from '@/lib/supabase/user.actions'
import React, { useState } from 'react'
import { toast } from 'sonner'

const ForgotPassword = () => { 
    const [email, setEmail] = useState('')
    const [isPending, setIsPending] = useState(false)
    const handle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setIsPending(true)
            await resetPasswordForEmail(email)
            toast.success('Success', {description: 'Password reset email sent successfully, Please Check your email.', className: 'border-green-500 border-2 bg-green-200 dark:bg-green-800 '})
            return
        } catch (error) {
            console.error(error)
            setIsPending(false)
            toast.error('Error', {description: 'An error occured, please try again.'})
        } finally {setIsPending(false)}
   }
  return (
    <WidthWrapper className="min-h-screen items-center justify-center">
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-primary py-2.5">Forgot password</h1>
            <p className="text-sm py-2">Enter your email address to reset your password.</p>
            <form className="flex flex-col gap-3" onSubmit={handle}>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email address" className="input" required/>
                <Button type="submit" className="" disabled={isPending}>{isPending? 'Processing...' : 'Send reset link'}</Button>
            </form>
        </div>
    </WidthWrapper>
  )
}

export default ForgotPassword