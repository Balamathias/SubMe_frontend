import WhatsAppButton from "@/components/WhatsAppButton";
import WidthWrapper from "@/components/WidthWrapper";
import Footer from "@/components/home/Footer";
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
    <main className="bg-blend-overlay min-h-screen relative" >

      <HomeNavbar />
      <Welcome />
      <OurServices />
      <Footer />
    </main>
  );
}
