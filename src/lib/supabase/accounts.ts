'use server'

import { Tables } from "@/database.types";
import { createClient } from "@/utils/supabase/server";
import { nanoid } from "nanoid";
import { getCurrentUser } from "./user.actions";
import { upsertWallet } from "./wallets";

// const supabase = createClient()

export const getUser = async (id?: string) => {
    const supabase = createClient()
    let ID;
    if (id) {
        ID = id
    } else {
        const { data: { user } } = await getCurrentUser()
        ID = user?.id
    }
    if (!ID) return { data: null, error: new Error('User not found') }
    const { data, error } = await supabase.from('users').select('*').eq('id', ID).single()

    if (error) throw error

    return { data, error }

}

export const upsertUser = async ({id, ...rest}: Pick<Tables<'users'>, 'address' | 'email' | 'first_name' | 'last_name' | 'id' | 'phone' | 'pin'>) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('users').upsert({
        id,
        updated_at: new Date().toISOString(),
        onboarded: true,
        unique_code: nanoid(10),
        ...rest,
    })

    const { data: getWallet } = await supabase.from('wallets').select('*').eq('user', id).single()
    if (!(getWallet?.user === id)) {
        const { error: walletError } = await upsertWallet({
            user: id,
            balance: 0,
        })

        if (walletError) {
            console.error(walletError)
        }
    }

    if (error) throw error
    return { data, error }
}