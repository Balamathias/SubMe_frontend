const __object = {
    'mtn': '01',
    'glo': '02',
    '9mobile': '03',
    'airtel': '04'
}

export const getNetworkValue = (network: 'mtn' | 'glo' | '9mobile' | 'airtel') => {
    return __object[network]
}