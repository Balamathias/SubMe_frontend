import { Tables } from "@/database.types";
import { getCurrentUser } from "./user.actions";
import { createClient } from "@/utils/supabase/server";

export const upsertHistory = async (payload: Pick<Tables<'history'>, 'title' | 'type' | 'user' | 'description'> & {id?: number}) => {
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