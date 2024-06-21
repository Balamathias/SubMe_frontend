import sendEmail from "@/utils/sendMail"
import { NextResponse } from "next/server"

export const POST = async (req: Request, res: Response) => {
    const data = await req.json()

    console.log(data)
    await sendEmail({
        email: 'balamathias40@gmail.com',
        subject: 'Transaction completed',
        message: 'Transaction completed successfully',
        html: '<h1>Transaction completed successfully</h1>'
    })

    return NextResponse.json({message: 'Transaction completed'}, {status: 200, statusText: 'OK'})
}