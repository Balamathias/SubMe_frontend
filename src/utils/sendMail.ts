'use server'

import type { EmailTemplateProps } from "@/email/Email";

interface Message {
    email: string;
    subject: string;
    message: string;
};

const sendEmail = async (message: Message & EmailTemplateProps) => {
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    })

    if (res.ok) {
        return res.json();
    } else {
        console.log(res.statusText)
    }
  };
  
  export default sendEmail;