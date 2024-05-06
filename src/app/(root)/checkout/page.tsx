import WidthWrapper from "@/components/WidthWrapper";
import PaymentForm from "@/components/remita/PaymentForm";

export default function CheckoutPage () {
    return (
        <WidthWrapper className="min-h-screen items-center justify-center">
            <PaymentForm />
        </WidthWrapper>
    )
}