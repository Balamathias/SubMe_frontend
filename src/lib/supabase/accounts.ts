'use server'

import { Tables } from "@/database.types";
import { createClient } from "@/utils/supabase/server";
import { nanoid } from "nanoid";
import { getCurrentUser } from "./user.actions";
import { upsertWallet } from "./wallets";

const supabase = createClient()

export const getUser = async (id?: string) => {
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
    const { data, error } = await supabase.from('users').upsert({
        id,
        updated_at: new Date().toISOString(),
        onboarded: true,
        unique_code: nanoid(10),
        ...rest,
    })

    const { error: walletError } = await upsertWallet({
        user: id,
        balance: 0,
    })

    if (walletError) throw walletError

    if (error) throw error
    return { data, error }
}