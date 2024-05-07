'use client'

import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { AuthSchema } from '@/utils/schema/userSchema'
import { z } from 'zod'
import { LucideEye, LucideEyeOff } from 'lucide-react'

interface InputFieldProps {
  label: string, 
  control: Control<z.infer<typeof AuthSchema>>,
  name: FieldPath<z.infer<typeof AuthSchema>>,
  placeholder?: string, 
  disabled?: boolean, 
  value?: string 
}

const InputField = ({ 
  label, 
  control, 
  placeholder, 
  name, 
  disabled = false, 
  value 
}: InputFieldProps) => {
    const [seePassword, setSeePassword] = React.useState(false)
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center justify-between my-1.5">
              {label}
              {(name === 'password' || name === 'confirm_password') &&
                (seePassword ? (<LucideEyeOff size={14} className='cursor-pointer' onClick={() => setSeePassword(false)} />) : <LucideEye size={14} className='cursor-pointer' onClick={() => setSeePassword(true)} />)
              }
            </FormLabel>
            <FormControl>
            <>
            <Input 
              placeholder={placeholder} {...field} 
              disabled={disabled ? disabled : false} 
              defaultValue={name === 'email' ? value : ''}
              value={field.value || ''}
              type={(name === 'password' || name === 'confirm_password') ? seePassword ? 'text' : 'password': 'text'}
            />
            </>
            </FormControl>
            <FormMessage className='text-rose-600' />
        </FormItem>
        )}
    />
  )
}

export default InputField