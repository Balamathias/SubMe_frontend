'use client'

import React from 'react';
import CountUp from 'react-countup';

const CurrencyDisplay = ({ amount }: { amount: number }) => {
    return (
        <CountUp
            start={0} 
            end={amount} 
            duration={2} 
            separator="," 
            decimals={2} 
            prefix="₦" 
            className='text-4xl py-2 font-bold'
        />
    );
};

export default CurrencyDisplay
