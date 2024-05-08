import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Control, FieldPath } from "react-hook-form"
import { z } from "zod"
import { DataSchema } from "@/utils/schema/dataSchema"

interface SelectScrollableProps {
    data: {
        title: string, 
        items: {label: string, value: string}[]
    }[],
    label: string,
    control: Control<z.infer<typeof DataSchema>>,
    name: FieldPath<z.infer<typeof DataSchema>>,
    placeholder: string
}

export function SelectScrollable({data, label, name, control, placeholder}: SelectScrollableProps) {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
            <FormLabel>{label}</FormLabel>

            <Select onChange={field.onChange} defaultValue={field.value}>
            <FormControl>
                <SelectTrigger className="">
                    <SelectValue placeholder={placeholder}/>
                </SelectTrigger>
            </FormControl>
            <SelectContent>
                {
                    data.map((d, idx) => (
                        <SelectGroup key={idx + d.title}>
                            <SelectLabel>{d.title}</SelectLabel>
                            {
                                d.items.map(item => (
                                    <SelectItem value={item.value} key={item.value}>{item.label}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    ))
                }
            </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>)}
    />
  )
}
