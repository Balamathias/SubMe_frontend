import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { UserSchema } from '@/utils/schema/userSchema'
import { z } from 'zod'

interface InputFieldProps {
  label: string, 
  control: Control<z.infer<typeof UserSchema>>,
  name: FieldPath<z.infer<typeof UserSchema>>,
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
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
            <Input 
              placeholder={placeholder} {...field} 
              disabled={disabled ? disabled : false} 
              defaultValue={name === 'email' ? value : ''}
              value={field.value || ''}
            />
            </FormControl>
            <FormMessage className='text-rose-600' />
        </FormItem>
        )}
    />
  )
}

export default InputField