import WidthWrapper from "@/components/WidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { LucideMail } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  return (
    <WidthWrapper className="min-h-screen justify-center items-center bg-[url('/bg/bubbles.png')] bg-cover mx-0 max-w-full" >
      <div className="flex flex-col gap-3 p-6 lg:px-10 lg:py-10 rounded-lg bg-background backdrop:backdrop-blur ">
        <LucideMail size={64} className="text-primary" />

        <h1 className="text-3xl py-2.5 text-primary">Welcome to SubME,</h1>

        <p className="text-muted-foreground">Your ultimate Aitime and data Top-up platform!</p>
        <p className="text-muted-foreground">Top up Data and Airtime at Cheaper Rates at <b className="text-brand font-semibold mt-3">Subme!</b>.</p>

        <h2 className="text-2xl py-2 font-semibold">Get Started</h2>

        <div className="flex items-center gap-4 flex-wrap">
          <Link href='/sign-in' className={buttonVariants({size: 'lg'})}>Sign in</Link>
          <Link href='/sign-up' className={buttonVariants({size: 'lg', variant: 'secondary'})}>Sign up</Link>
          <Link href='/dashboard' className={buttonVariants({size: 'lg', variant: 'outline'})}>Dashboard</Link>
        </div>
      </div>
    </WidthWrapper>
  );
}
