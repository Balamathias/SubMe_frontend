'use server'

import { propsWithVariationId, serviceProps } from "./types"


// https://vtu.ng/wp-json/api/v1/airtime?username=Frank&password=123456&phone=07045461790&network_id=mtn&amount=2000

// https://vtu.ng/wp-json/api/v1/data?username=Frank&password=123456&phone=07045461790&network_id=mtn&variation_id=M1024

export const username = <string>process.env.NEXT_PUBLIC_VTU_USERNAME
export const password = <string>process.env.NEXT_PUBLIC_VTU_PASSWORD

export const service = async (params: serviceProps) => {
    const { type, options } = params
    const { phone, network, amount } = options
    const url = `https://vtu.ng/wp-json/api/v1/${type}?username=${username}&password=${password}&phone=${phone}&network_id=${network}&amount=${amount}`
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        const data = await response.json()
        return {data, status: response.status}
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getDataPlan = async (params: propsWithVariationId) => {
    const { type, options } = params
    const { phone, network, variation_id } = options
    const url = `https://vtu.ng/wp-json/api/v1/${type}?username=${username}&password=${password}&phone=${phone}&network_id=${network}&variation_id=${variation_id}`
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        const data = await response.json()
        return {data, status: response.status}
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getBalance = async () => {
    const url = `https://vtu.ng/wp-json/api/v1/balance?username=${username}&password=${password}`
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        const data = await response.json()
        return {data, status: response.status}
    } catch(error: any) {
        throw new Error(error)
    }
}

export const getTransactions = async () => {
    const url = `https://vtu.ng/wp-json/api/v1/transactions?username=${username}&password=${password}`
    
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        const data = await response.json()
        return {data, status: response.status}
    } catch(error: any) {
        throw new Error(error)
    }
}
