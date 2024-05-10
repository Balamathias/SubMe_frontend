"use client"

import React, { useEffect } from 'react'
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserSchema } from '@/utils/schema/userSchema'
import InputField from './InputField'
import { User } from '@supabase/supabase-js'
import { upsertUser } from '@/lib/supabase/accounts'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { hashPin } from '@/lib/bcrypt'


const OnboardingComponent = ({ currentUser }: {currentUser?: User | null}) => {
  useEffect(() => {
    toast.info('Complete Your profile', {description: 'Complete your profile with authentic details so we can serve your needs better.'})
  }, [])
  const [isPending, setIsPending] = React.useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
          username: "",
          city: "",
          email: currentUser?.email ||"",
          first_name: "",
          last_name: "",
          phone: "",
          pin: "",
          street: "",
          state: "",
          postal_code: "",
          invited_by: ""
        },
      })

  
      async function onSubmit(values: z.infer<typeof UserSchema>) {
        const address = {
            city: values.city,
            state: values.state,
            street: values.street,
            postal_code: values.postal_code,
        }

        delete values?.city
        delete values?.state
        delete values?.street
        delete values?.postal_code

        setIsPending(true)
        try {
            const {data} = await upsertUser({
                ...values,
                id: currentUser?.id as string, 
                address: JSON.stringify(address),
                pin: (await hashPin(values.pin)),
            })
            toast.success('Success!', { description: 'Account updated successfully, You will be redirected in a bit...' })
            router.push('/dashboard')
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            <div className="flex gap-2 items-center">
                <InputField name="first_name" label="First Name" control={form.control} placeholder='First Name' />
                <InputField name="last_name" label="Last Name" control={form.control} placeholder='Last Name' />
            </div>

            <div className="flex gap-2 items-center">
                <InputField name="phone" label="Phone Number" control={form.control} placeholder='08124576890' />
                <InputField name="pin" label="Pin" control={form.control} placeholder='1234' />
            </div>

            <InputField name="username" label="Username" control={form.control} placeholder='angela' />

            <div className="flex gap-2 items-center">
                <InputField name="city" label="City" control={form.control} placeholder='Abuja' />
                <InputField name="state" label="State" control={form.control} placeholder='FCT' />
            </div>

            <div className="flex gap-2 items-center">
                <InputField name="street" label="Street Address" control={form.control} placeholder='No. 1 Pst...' />
                <InputField name="invited_by" label="Invite Code (Optional)" control={form.control} placeholder='XCVYY23JJy' />
            </div>
            <InputField name="email" disabled label="Email" control={form.control} value={currentUser?.email} />
            
            <Button type="submit" disabled={isPending} className='mt-2 w-full'>{isPending ? 'Processing...' : 'Submit'}</Button>
          </form>
        </Form>
      )
}

export default OnboardingComponent