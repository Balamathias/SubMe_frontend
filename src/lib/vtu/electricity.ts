'use server'

// https://vtu.ng/wp-json/api/v1/electricity?username=Frank&password=123456&phone=07045461790&meter_number=62418234034&service_id=ikeja-electric&variation_id=prepaid&amount=3000

import { password, username } from "."
import { electricityProps } from "./types"

export const getElectricity = async ({
    meter_number,
    phone,
    service_id,
    variation_id,
    amount
}: electricityProps) => {
    const url = `https://vtu.ng/wp-json/api/v1/electricity?username=${username}&password=${password}&phone=${phone}&meter_number=${meter_number}&service_id=${service_id}&variation_id=${variation_id}&amount=${amount}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Connection refused')
        }
        const data = await response.json()
        return {data, status: 200}
    } catch (error: any) {
        console.error(error)
        throw new Error(error)
    }
}