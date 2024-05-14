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
import { signIn } from '@/lib/supabase/user.actions'
import Link from 'next/link'
import { Card } from '../ui/card'
import GoogleAuthButton from '@/components/GoogleAuthButton'

const SignInComponent = () => {
    const [isPending, setIsPending] = React.useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof AuthSchema>>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })
  
      async function onSubmit(values: z.infer<typeof AuthSchema>) {
        setIsPending(true)
        try {
            const {status} = await signIn({
                email: values.email!,
                password: values.password!
            })
            if (status === 200)
              toast.success('Success!', { description: 'Signed In successfully, You will be redirected in a bit...' })
            router.push('/dashboard')
            return
        }
        catch (error: any) {
            console.error(error)
            setIsPending(false)
            return toast.error('Error!', { description: 'Sign In failed, please verify your credentials' })
        }
        finally { setIsPending(false) }
      }

    return (
        <Form {...form}>
          <Card className='flex flex-col gap-2 shadow-none border-none w-full max-w-[450px]'>


            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-1 flex-col">

              <InputField name="email" label="Email" placeholder='youremail@example.com' control={form.control} />
              <InputField name="password" label="Password" control={form.control} placeholder='password...' />

              <Button type="submit" disabled={isPending} className='mt-2 w-full'>{isPending ? 'Processing...' : 'Sign In'}</Button>
            </form>
            <GoogleAuthButton />
            <div className="flex flex-col space-y-2 text-xs">
              <p className='text-muted-foreground'>{"Don't"} have an account? <Link href="/sign-up" className="underline text-brand">Sign up</Link></p>
              <p className='text-muted-foreground'>Forgot password? <Link href="/auth/forgot-password" className="underline text-brand">Reset password</Link></p>
            </div>
          </Card>
        </Form>
      )
}

export default SignInComponent