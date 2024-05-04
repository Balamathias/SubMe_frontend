
import { apiKey, siteURL, userID } from "./config";
import { AirtimeProps, DataBundleProps, EpinsProps } from "./types";

/**
 * @description: A library to interact with ClubKonnect API
 * @param {string} apiKey - The API key for the ClubKonnect API
 * @param {string} siteURL - The URL to call back to after a transaction
 * @param {string} userID - The user ID for the ClubKonnect API
 * @returns {object} - An object with methods to interact with the ClubKonnect API
 * @example 
 * ```js
 * const clubConnect = new ClubConnect();
 * const balance = await clubConnect.getBalance();
 * console.log(balance)
 * ```
 */
class ClubConnect {
    _baseURL: string;
    _nelloURL: string;
    constructor() {
        this._baseURL = 'https://www.clubkonnect.com';
        this._nelloURL = 'https://www.nellobytesystems.com'
    }

    paramitize(obj: { [key: string]: string | number}, url?: string) {
        if (url) {
            return url + '?' + Object.keys(obj).map((key) => key + '=' + obj[key]).join('&');
        }
        return Object.keys(obj).map((key) => key + '=' + obj[key]).join('&');
    }

    async getBalance() {
        try {
            const res = await fetch(`${this._baseURL}/APIWalletBalanceV1.asp?UserID=${userID}&APIKey=${apiKey}`);
            if (!res.ok) {
                throw new Error('Error fetching balance')
            }
            const data = await res.json()
            return {data, status: res.status}
        } catch (error: any) {
            throw new Error(error)
        }
    }

    async getAirtime(props: AirtimeProps) {
        try {
            const {
                mobileNetwork,
                amount,
                mobileNumber,
                requestID,
                callBackURL,
            } = props;

            const url = `${this._nelloURL}/APIAirtimeV1.asp?UserID=${userID}&APIKey=${apiKey}&MobileNetwork=${mobileNetwork}&Amount=${amount}&MobileNumber=${mobileNumber}&RequestID=${requestID}&CallBackURL=${callBackURL}`;

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error fetching airtime');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async queryTransaction(by: 'orderID' | 'requestID') {
        try {
            const url = `${this._nelloURL}/APIQueryV1.asp?UserID=${userID}&APIKey=${apiKey}${by === 'orderID' ? `&OrderID=${by}` : `&RequestID=${by}`}`;

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error querying transaction');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async cancelOrder(orderID: string) {
        try {
            const url = `${this._nelloURL}/APICancelV1.asp?UserID=${userID}&APIKey=${apiKey}&OrderID=${orderID}`;

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error canceling order');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param props: AitimeProps
     * @returns: 
     * ```js
     * {"orderid":"789","statuscode":"100","status":"ORDER_RECEIVED"}
     * ```
     */
    async sendAirtime(props: Pick<AirtimeProps, 'mobileNetwork' | 'amount' | 'mobileNumber'>) {
        try {
            const url = `${this._nelloURL}/APIAirtimeV1.asp?UserID=${userID}&APIKey=${apiKey}&MobileNetwork=${props.mobileNetwork}}&Amount=${props.amount}&MobileNumber=${props.mobileNumber}&CallBackURL=${siteURL}`;

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error sending airtime');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * @description: Query a transaction by an orderID
     * @param orderID: string
     * @returns something similar to 
     * ```js
     * {"date":"22th-Jul-2023","orderid":"6501321715","requestid":"","statuscode":"200",
     * "status":"ORDER_COMPLETED","remark":"You have successfully topped up N100.00 to 2348149659347. ",
     * "ordertype":"100 Credit","mobilenetwork":"MTN","mobilenumber":"08149659347",
     * "amountcharged":"96.5","walletbalance":"3651.449"}
     * ```
     */
    async queryOrder(orderID: string) {
        try {
            const url = `${this._nelloURL}/APIQueryV1.asp?UserID=${userID}&APIKey=${apiKey}&OrderID=${orderID}`;

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error querying order');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async cancelTransaction(requestID: string) {
        try {
            const url = `${this._nelloURL}/APICancelV1.asp?UserID=${userID}&APIKey=${apiKey}&RequestID=${requestID}`;

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error canceling transaction');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

    /**
     * @description: Get available services
     * @returns: A list of available services 
     */
    async getAvailableEpinServices() {
        try {
            const url = `${this._nelloURL}/APIEPINDiscountV1.asp`;
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error fetching available services');
            }
            const data = await res.json();
            return { data, status: res.status };
        } catch (error: any) {
            throw new Error(error);
        }
    }

}

export default ClubConnect

const clubConnect = new ClubConnect();
export {
    clubConnect, 
}