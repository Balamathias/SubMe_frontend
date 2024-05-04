import { fakeUser } from "@/lib/supabase/session";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface paymentProps {
    amount?: string,
    description?: string,
}

const key = process.env.NEXT_REMITA_API_KEY as string

export const usePayments = (options?: paymentProps) => {
  const router = useRouter()
  const {id, first_name, last_name, email} = fakeUser()

  const [paymentData, setpaymentData] = useState({
    key,
    customerId: id,
    firstName: first_name,
    lastName: last_name,
    email,
    amount: options?.amount,
    narration: options?.description || "Payments",
  });

  let data = {
    ...paymentData,
    onSuccess: function (response: any) {
        console.log(response)
        toast.success("Success!", {description: "Payments made successfully"});
      return router.push('/checkout/success?transactionId='+ response.transactionId + '&amount=' + response.amount + '&status=success')
    },
    onError: function (response: any) {
        console.log("callback Error Response", response);
        return toast.error('Error', { description: "Sorry, an error occured and we could not process your payments by this time."})
    },
    onClose: function () {
        console.log("closed");
        return toast.info("Closed", {description: "Operation cancelled by user."})
    },
  };

  return {data, setpaymentData, paymentData}
}