'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/lib/supabase/user.actions"
import { PostgrestError } from "@supabase/supabase-js"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import { toast } from "sonner"

export default function SignInComponent() {
  const [isPending, setIsPending] = useState(false)
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })

  const router = useRouter()

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    try {
      const {message, status} = await signIn({
        email: fields.email,
        password: fields.password,
      })

      if (status === 200) {
        toast.success('Success', {description: 'Signed In successfully, You will be redirected in a bit.'})
        router.push('/dashboard')
      }

    } catch (error: PostgrestError | Error | any) {
      console.error(error)
      setIsPending(false)
      toast.error('An error occured.', {description: error?.message})
    } finally {
      setIsPending(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl py-1 text-primary">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com" 
              onChange={(e) => setFields({ ...fields, email: e.target.value }) }
              required 
          />
          </div>
          <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input 
              id="password" 
              type="password" 
              onChange={(e) => setFields({ ...fields, password: e.target.value }) }
              required 
          />
        </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" disabled={isPending}>{isPending ? 'Processing...' : 'Sign in'}</Button>
          <p className="text-sm text-muted-foreground py-2 w-full">Don&#39;t have an account?{' '} <Link href="/sign-up" className="underline text-primary ">Sign up</Link>
          </p>

          <p className="text-sm text-muted-foreground py-2 w-full">Forgotten password?{' '} <Link href="/auth/forgot-password" className="underline text-primary ">Reset Password</Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  )
}
