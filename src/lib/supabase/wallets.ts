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
    if (!ID) return { data: null, error: new Error('User not found') }

    const { data, error } = await supabase.from('wallets').select('*').eq('user', ID).single()

    if (!data) {
        const {data, error} = await upsertWallet({ user: ID, balance: 0 })
        if (error) throw error
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
        if (error) throw error
        if (data) return { data, error: new Error('Wallet already exists') }
    }

    const { data, error } = await supabase.from('wallets').upsert({
        ...rest,
        id,
        user: ID,
        updated_at: new Date().toISOString(),
    })

    if (error) throw error
    return { data, error }
}