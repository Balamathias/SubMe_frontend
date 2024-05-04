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
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import { toast } from "sonner"

export default function ResetPasswordComponent({ email }: { email: string }) {
  const [isPending, setIsPending] = useState(false)
  const [fields, setFields] = useState({
    password: '',
    email,
  })

  const router = useRouter()

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsPending(true)
      const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })
      
      if (response.ok) {
        if (response?.status === 200) {
          toast.success('Password reset successful', {description: 'You have successfully reset your password.'})
          return router.replace('/auth/password-reset-success')
        }
        toast.error("An error occured.", {
          description: "Sorry, we could not reset your password by this time.",
        })
      } else {
        toast.error("An error occured.", {
          description: "Sorry, we could not reset your password by this time.",
        })
      }

    } catch (error) {
      console.error(error)
      setIsPending(false)
      toast.error("An error occured.", {
        description: "Sorry, we could not reset your password by this time.",
      })
    } finally {
      setIsPending(false)
    }
    if (isPending) {
       toast.loading('Processing...', {description: 'Please wait while we reset your password.'})
     } 
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-sm border-none shadow-lg drop-shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl py-1 text-primary">Reset Password</CardTitle>
          <CardDescription>
            Enter a new password for your account: <b>{email}</b>.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
          <Button className="w-full" disabled={isPending}>{isPending ? 'Processing...' : 'Reset'}</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
