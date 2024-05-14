"use client"

import React from 'react'
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthSchema } from '@/utils/schema/userSchema'
import InputField from './InputField'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { signUp } from '@/lib/supabase/user.actions'
import Link from 'next/link'
import { Card } from '../ui/card'
import GoogleAuthButton from '../GoogleAuthButton'

const SignInComponent = () => {
    const [isPending, setIsPending] = React.useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof AuthSchema>>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
          email: "",
          password: "",
          confirm_password: ""
        },
      })
  
      async function onSubmit(values: z.infer<typeof AuthSchema>) {
        if (values.password !== values.confirm_password) {
            form.setError('confirm_password', { message: 'Passwords do not match' })
            return
        }
        setIsPending(true)
        try {
            const {status} = await signUp({
                email: values.email!,
                password: values.password!
            })
            if (status === 200)
              toast.success('Success!', { description: 'Verification Email sent to ' + values.email, duration: 5000 })
            router.push('/auth/verification-email-sent')
            return
        }
        catch (error: any) {
            console.error(error)
            setIsPending(false)
            return toast.error('Error!', { description: error?.message })
        }
        finally { setIsPending(false) }
      }

    return (
        <Form {...form}>
          <Card className='flex flex-col gap-2 shadow-none border-none w-full max-w-[450px]'>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              <InputField name="email" label="Email" placeholder='youremail@example.com' control={form.control} />
              <InputField name="password" label="Password" control={form.control} placeholder='password...' />
              <InputField name="confirm_password" label="Confirm Password" control={form.control} placeholder='Confrim password...' />

              <Button type="submit" disabled={isPending} className='mt-2 w-full'>{isPending ? 'Processing...' : 'Sign up'}</Button>
            </form>
            <GoogleAuthButton />
            
            <div className="flex flex-col space-y-2 text-xs">
              <p className='text-muted-foreground'>Already have an account? <Link href="/sign-in" className="underline text-brand">Sign In</Link></p>
            </div>

          </Card>
        </Form>
      )
}

export default SignInComponent