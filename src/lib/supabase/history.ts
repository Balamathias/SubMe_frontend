'use server'

import { Tables } from "@/database.types";
import { getCurrentUser } from "./user.actions";
import { createClient } from "@/utils/supabase/server";

export const upsertHistory = async (payload: Pick<Tables<'history'>, 'title' | 'type' | 'user' | 'description' | 'meta_data'> & {id?: number}) => {
    let ID;
    const supabase = createClient()
    if (payload.user) {
        ID = payload.user;
    } else {
        ID = (await getCurrentUser()).data.user?.id
    }

    const {data, error} = await supabase.from('history').upsert({
        ...payload,
        user: ID
    }).select().single()

    if (error) throw error

    return { data, error }
}

export const getHistory = async (userID?: number) => {
    const supabase = createClient()
    const { data, error } = await supabase.from('history').select().eq('user', userID || (await getCurrentUser()).data.user?.id!)

    if (error) throw error

    return { data, error }
}
