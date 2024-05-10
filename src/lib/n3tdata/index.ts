'use server'

import { Payload } from "./types";

const baseURL = 'https://n3tdata.com/api'

const dataURL: string = 'https://n3tdata.com/api/data';

export async function getUserToken() {
    const username = process.env.NEXT_N3TDATA_USERNAME
    const password = process.env.NEXT_N3TDATA_PASSWORD
    
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
    
    const requestOptions = {
        method: 'POST',
        headers: headers,
    };
    
    try {
        const res = await fetch(baseURL + '/user', requestOptions)
        if (!res.ok) {
            throw new Error('Error fetching user')
        }
        const data = await res.json()
        return { data, status: res.status }
    } catch (error: any) {
        console.log(error)
    }
}
  
export const sendData = async (payload: Payload) => {
    const token = (await getUserToken())?.data['AccessToken']
    const headers: HeadersInit = new Headers({
        'Authorization': 'Token ' + token,
        'Content-Type': 'application/json'
    });
  
    try {
        const res = await fetch(dataURL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
          })
          
          if (!res.ok) {
            console.error('Error fetching data')
            throw Error
        }
        const data = await res.json()
        return { data, status: res.status }
    } catch (error: any) {
        const _error = new Error(error)
        return {data: null, status: 500, error: _error.message}
    }
}
  
export const sendAirtime = async (payload: Pick<Payload, 'bypass' | 'network' | 'phone' | 'request-id'> & {plan_type: string | 'VTU', amount: number}) => {
    const token = (await getUserToken())?.data['AccessToken']
    const headers: HeadersInit = new Headers({
        'Authorization': 'Token ' + token,
        'Content-Type': 'application/json',
    });
  
    try {
        const res = await fetch(baseURL + '/topup/', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
          })
          
          if (!res.ok) {
            console.error('Error fetching data')
            throw Error
        }
        const data = await res.json()
        return { data, status: res.status }
    } catch (error: any) {
        console.error(error)
        throw new Error(error)
    }
}

