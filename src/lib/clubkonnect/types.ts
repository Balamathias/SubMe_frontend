
/**
 * @description: Interface for the Clubkonnect API props
 * @param {string} mobileNetwork - The mobile network to send airtime to; 01 for MTN, 02 for glo,
 * 03 for 9mobile, 04 for Airtel
 * @param {number} amount - The amount of airtime to send
 * @param {string} mobileNumber - The mobile number to send airtime to 
 * @param {string} requestID - The request ID for the airtime transaction
 * @param {string} callBackURL - The URL to call back to after the transaction
 */
export interface AirtimeProps {
    mobileNetwork: '01' | '02' | '03' | '04';
    amount: number;
    mobileNumber: string;
    requestID: string;
    callBackURL: string;
}

/**
 * @description: Interface for the Clubkonnect Databundle props
 * @param {string} mobileNetwork - The mobile network to send data to; 01 for MTN, 02 for glo,
 * 03 for 9mobile, 04 for Airtel
 * @param {string} dataPlan - The data plan to send
 * @param {string} mobileNumber - The mobile number to send data to
 * @param {string} requestID - The request ID for the data transaction
 * @param {string} callBackURL - The URL to call back to after the transaction
 * @returns {object} - An object with methods to interact with the ClubKonnect API
 */
export interface DataBundleProps {
    mobileNetwork: '01' | '02' | '03' | '04';
    dataPlan: string;
    mobileNumber: string;
    requestID: string;
    callBackURL: string;
}

export interface EpinsProps {
    mobileNetwork: '01' | '02' | '03' | '04';
    value: number;
    quantity: number;
    requestID: string;
    callBackURL: string;
}
