import WidthWrapper from "@/components/WidthWrapper";
import PaymentForm from "@/components/remita/PaymentForm";
import { Suspense } from "react";

export default function CheckoutPage () {
    return (
        <WidthWrapper className="min-h-screen items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
                <PaymentForm />
            </Suspense>
        </WidthWrapper>
    )
}