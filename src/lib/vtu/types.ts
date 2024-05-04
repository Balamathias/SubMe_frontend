export type VariationID =
  | '500'
  | 'M1024'
  | 'M2024'
  | '3000'
  | '5000'
  | '10000'
  | 'mtn-20hrs-1500'
  | 'mtn-30gb-8000'
  | 'mtn-40gb-10000'
  | 'mtn-75gb-15000'
  | 'glo100x'
  | 'glo200x'
  | 'G500'
  | 'G2000'
  | 'G1000'
  | 'G2500'
  | 'G3000'
  | 'G4000'
  | 'G5000'
  | 'G8000'
  | 'glo10000'
  | 'AIRTEL500MB'
  | 'AIRTEL1GB'
  | 'AIRTEL2GB'
  | 'AIRTEL5GB'
  | 'AIRTEL10GB'
  | 'AIRTEL15GB'
  | 'AIRTEL20GB'
  | 'airt-1100'
  | 'airt-1300'
  | 'airt-1650'
  | 'airt-2200'
  | 'airt-3300'
  | 'airt-5500'
  | 'airt-11000'
  | 'airt-330x'
  | 'airt-550'
  | 'airt-1650-2'
  | '9MOB1000'
  | '9MOB34500'
  | '9MOB8000'
  | '9MOB5000';

export interface serviceProps {
    type: 'airtime' | 'data' | 'cable' | 'electricity' | 'tv' | 'wallet',
    options: {
        phone: string,
        network: 'mtn' | 'glo' | 'airtel' | 'etisalat',
        amount: string,
    },
    user?: {},
}

export interface propsWithVariationId {
    type: 'data',
    options: {
        phone: string,
        network: 'mtn' | 'glo' | 'airtel' | 'etisalat',
        variation_id: VariationID,
    },
    user?: {},
}

export interface TVProps {
    phone: string,
    service_id: string,
    smartcard_number: string,
    variation_id: VariationID,
}

export interface electricityProps {
    phone: string,
    meter_number: string,
    service_id: string,
    variation_id: string,
    amount: string
}