'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const supabase = createClient()

export const signUp = async ({ email, password }: { email: string, password: string }) => {

    const { error } = await supabase.auth.signUp({
        email,
        password,
    })
    if (error) throw error
    revalidatePath('/')
    return redirect('/dashboard')
}

export const signIn = async ({ email, password }: { email: string, password: string }) => {
    
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) throw error
        revalidatePath('/')
        return redirect('/dashboard')
}

export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    revalidatePath('/')
    return redirect('/sign-in')
}