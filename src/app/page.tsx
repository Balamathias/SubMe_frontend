import WidthWrapper from "@/components/WidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { LucideMail } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  return (
    <WidthWrapper className="min-h-screen justify-center items-center" >
      <div className="flex flex-col gap-3 p-6 lg:px-10 lg:py-10 rounded-lg shadow-lg drop-shadow-lg">
        <LucideMail size={64} className="text-primary" />

        <h1 className="text-3xl py-2.5 text-primary">Welcome to Mailer!</h1>

        <p className="text-muted-foreground">Join me to cruise with <b className="text-primary font-semibold">Nodemailer!</b>. Kudos to bro Dan for suggesting it!</p>

        <h2 className="text-2xl py-2 font-semibold">Get Started</h2>

        <div className="flex items-center gap-4 flex-wrap">
          <Link href='/sign-in' className={buttonVariants({size: 'lg'})}>Sign in</Link>
          <Link href='/sign-up' className={buttonVariants({size: 'lg', variant: 'secondary'})}>Sign up</Link>
          <Link href='/checkout' className={buttonVariants({size: 'lg', variant: 'outline'})}>Checkout</Link>
        </div>
      </div>
    </WidthWrapper>
  );
}
