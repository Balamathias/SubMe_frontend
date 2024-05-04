'use server'

// https://vtu.ng/wp-json/api/v1/tv?username=Frank&password=123456&phone=07045461790&service_id=gotv&smartcard_number=7032400086&variation_id=gotv-max

import { password, username } from "."
import { TVProps } from "./types"

export const getTv = async ({
    phone,
    service_id,
    smartcard_number,
    variation_id
}: TVProps) => {
    try {
        const response = await fetch(`https://vtu.ng/wp-json/api/v1/tv?username=${username}&password=${password}&phone=${phone}&service_id=${service_id}&smartcard_number=${smartcard_number}&variation_id=${variation_id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch tv data')
        }
        const data = await response.json()
        return {data, error: null}
    } catch (error: any) {
        console.error(error)
        throw new Error(error)
    }
}
