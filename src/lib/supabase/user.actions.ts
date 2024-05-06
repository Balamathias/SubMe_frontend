'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const signUp = async ({ email, password }: { email: string, password: string }) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
        email,
        password,
    })
    if (error) throw error
    revalidatePath('/')
    return { message: 'SUCCESS', status: 200 }
}

export const signIn = async ({ email, password }: { email: string, password: string }) => {
    const supabase = createClient()
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) throw error
        revalidatePath('/')
        return { message: 'SUCCESS', status: 200 }
}

export const signOut = async () => {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    revalidatePath('/')
    return redirect('/sign-in')
}

export const getCurrentUser = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error) {
        console.error(error)
        return { data: { user: null }}
    }
    return { data }
}