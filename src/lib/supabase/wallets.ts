'use server'

import { createClient } from "@/utils/supabase/server"
import { getCurrentUser } from "./user.actions";

// const supabase = createClient()

export const getWallet = async (userId?: string) => {
    const supabase = createClient()
    let ID;
    if (userId) {
        ID = userId
    } else {
        const { data: { user } } = await getCurrentUser()
        ID = user?.id
    }
    if (!ID) return { data: null, error: null }

    const { data, error } = await supabase.from('wallets').select('*').eq('user', ID).single()

    if (!data?.id) {
        const {data, error} = await upsertWallet({ user: ID, balance: 0 })
        if (error) return { data: null, error }
        return { data, error }
    }

    if (error) throw error

    return { data, error }
}

export const upsertWallet = async ({id, user: userId, ...rest}: {id?: string, user?: string, balance?: number}) => {
    const supabase = createClient()
    let ID;
    if (userId) {
        ID = userId
    } else {
        const { data: { user } } = await getCurrentUser()
        ID = user?.id
    }
    if (!ID) return { data: null, error: new Error('User not found') }

    if (id) {
        const { data, error } = await supabase.from('wallets').select('*').eq('id', id).single()
        if (error) return { data: null, error }
        if (data) return { data, error: {message: 'Wallet already exists'}}
    }

    const { data, error } = await supabase.from('wallets').upsert({
        ...rest,
        id,
        user: ID,
        updated_at: new Date().toISOString(),
    })

    if (error) console.error(error)

    return { data, error }
}

export const updateWalletBalance = async (id: string, balance: number) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('wallets').update({balance}).eq('id', id).select()
    if (error) throw error
    return { data, error }
}