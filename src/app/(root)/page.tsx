import WhatsAppButton from "@/components/WhatsAppButton";
import WidthWrapper from "@/components/WidthWrapper";
import HomeNavbar from "@/components/home/HomeNavbar";
import { buttonVariants } from "@/components/ui/button";
import { getUser } from "@/lib/supabase/accounts";
import { LucideMail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


export default async function Home({ searchParams }: { searchParams: {[key: string]: string}}) {
  const urlParams = new URLSearchParams(searchParams)
  const { data: user } = await getUser()

  return (
    <main className="text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-blend-overlay min-h-screen relative" >

      <HomeNavbar />

      <section className="flex gap-3 w-full max-md:flex-col-reverse p-4 lg:p-8 justify-between  max-w-7xl mx-auto items-stretch mt-20">
        <div className="flex-1 flex flex-col space-y-6 h-full">
          <h2 className="text-5xl font-semibold py-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-amber-700 to-amber-500 text-transparent text-clip bg-clip-text">
            Welcome to SubMe,
          </h2>
          <h2 className="text-2xl text-muted-foreground">
            Your ultimate data and Airtime plug.
          </h2>
          <p className="py-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 via-amber-500 to-orange-400 text-transparent text-clip bg-clip-text">Buy data, airtime and Epins at affordable rates. We are fast and reliable, purchase Airtime and receive it immediately. Our transaction is a breeze.</p>

          <div className="flex gap-3 flex-row items-center max-sm:flex-col w-full">
            {
              user ? (
                <>
                  <Link 
                    className="p-4 text-center flex items-center justify-center rounded-xl text-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-amber-600 to-fuchsia-900 mt-3 font-semibold hover:opacity-50 hover:transition-all w-full"
                    href={'/sign-up'}>Get Started with Email</Link>
                  <Link 
                    className="p-4 text-center flex items-center justify-center border-gray-500 rounded-xl border-2 bg-clip-text text-transparent text-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-amber-600 to-fuchsia-900 mt-3 font-semibold hover:opacity-50 hover:transition-all w-full"
                    href={'/sign-in'}>Continue with Google</Link>
                </>
              ): (

                <Link 
                className="p-4 text-center flex items-center justify-center border-gray-500 rounded-xl border-2 bg-clip-text text-transparent text-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-amber-600 to-fuchsia-900 mt-3 font-semibold hover:opacity-50 hover:transition-all w-full"
                href={'/dashboard'}>Go to Dashboard</Link>
              )
            }
          </div>

        </div>
        <div className="flex-1">
          <Image 
            src={'/bg/dashboard.png'}
            alt="Background"
            width={1000}
            height={1000}
            className="object-cover w-full flex-1 h-full rounded-lg"
          />
        </div>
      </section>
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
