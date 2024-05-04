'use client'

// @ts-ignore
import RemitaPayment from "react-remita";

import { Input } from "../ui/input";
import { buttonVariants } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { usePayments } from "@/hooks/usePayments";

function PaymentForm() {
const { setpaymentData, paymentData, data } = usePayments()
return (
    <Card className="w-full max-w-sm shadow-lg rounded-lg py-5 drop-shadow-lg">
        <CardHeader>
            <CardTitle className="text-2xl py-1">Fund Wallet</CardTitle>
            <CardDescription>
            Enter an amount below to fund your wallet.
            </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className="grid grid-col gap-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="amount"
                    placeholder='Amount'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, amount: e.target.value })
                    }
                />
            </div>
            <div className="grid grid-col gap-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Input
                    className="w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    type='text'
                    id="description"
                    placeholder='Description (optional)'
                    onChange={(e) =>
                        setpaymentData({ ...paymentData, narration: e.target.value })
                    }
                />
            </div>
            <RemitaPayment
                remitaData={data}
                className={buttonVariants()}
                text='Pay with Remita' 
                live={false}
            />
        </CardContent>
    </Card>
);
}

export default PaymentForm;
