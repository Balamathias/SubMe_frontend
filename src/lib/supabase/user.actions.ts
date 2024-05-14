'use server'

import { createClient } from "@/utils/supabase/server"
import { Provider } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"


export const signUp = async ({ email, password }: { email: string, password: string }) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
        email,
        password,
    })
    if (error) throw error
    revalidatePath('/', 'layout')
    return { message: 'SUCCESS', status: 200 }
}

export const signIn = async ({ email, password }: { email: string, password: string }) => {
    const supabase = createClient()
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) throw error
        revalidatePath('/', 'layout')
        return { message: 'SUCCESS', status: 200 }
}

export const signOut = async () => {
    const supabase = createClient()
    const { data: { user } } = await getCurrentUser()
    if (user) {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        revalidatePath('/', 'layout')
        return redirect('/sign-in')
    } else {
        return redirect('/sign-in')
    }
}

export const signInWithOAuth = async (provider?: Provider) => {
    const supabase = createClient()
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: provider || 'google',
        options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
    })

    console.log(data, error)

    if (error) throw error

    return NextResponse.redirect(data.url)
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