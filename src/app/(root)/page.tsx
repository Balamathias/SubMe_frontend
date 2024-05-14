import WhatsAppButton from "@/components/WhatsAppButton";
import WidthWrapper from "@/components/WidthWrapper";
import HomeNavbar from "@/components/home/HomeNavbar";
import OurServices from "@/components/home/OurServices";
import Welcome from "@/components/home/Welcome";
import { buttonVariants } from "@/components/ui/button";
import { getUser } from "@/lib/supabase/accounts";
import { LucideMail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


export default async function Home({ searchParams }: { searchParams: {[key: string]: string}}) {
  const urlParams = new URLSearchParams(searchParams)

  return (
    <main className="text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-blend-overlay min-h-screen relative" >

      <HomeNavbar />
      <Welcome />
      <OurServices />
      
      {/* <div className="flex flex-col gap-3 p-6 lg:px-10 lg:py-10 rounded-lg bg-background backdrop:backdrop-blur ">
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
        <Suspense fallback={<p>Loading...</p>}>
          <WhatsAppButton />
        </Suspense>
      </div> */}
    </main>
  );
}
