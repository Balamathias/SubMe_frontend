'use client'

import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { DataSchema } from '@/utils/schema/dataSchema'

interface DataInputFieldProps {
  label: string, 
  control: Control<z.infer<typeof DataSchema>>,
  name: FieldPath<z.infer<typeof DataSchema>>,
  placeholder?: string, 
  disabled?: boolean, 
  value?: string,
  defaultValue?: string
}

const DataInputField = ({ 
  label, 
  control, 
  placeholder, 
  name, 
  disabled = false, 
  defaultValue 
}: DataInputFieldProps) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center justify-between my-1.5">
                {label}
            </FormLabel>
            <FormControl>
            <>
            <Input 
              placeholder={placeholder} {...field} 
              disabled={disabled ? disabled : false} 
              defaultValue={defaultValue}
              value={field.value || ''}
            />
            </>
            </FormControl>
            <FormMessage className='text-rose-600' />
        </FormItem>
        )}
    />
  )
}

export default DataInputField