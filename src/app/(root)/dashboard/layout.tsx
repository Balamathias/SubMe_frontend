import MobileBottombar from "@/components/dashboard/MobileBottombar";
import TopNavbar from "@/components/dashboard/TopNavbar";
import SidebarComponent from "@/components/sidebar";
import { getUser } from "@/lib/supabase/accounts";
import { redirect } from "next/navigation";

export default async function DashboardLayout ({ children }: {children: React.ReactNode}) {
    const { data: accountData } = await getUser()
    if (!accountData?.onboarded) return redirect('/onboarding')
    return( 
        <main className="flex h-screen w-full overflow-hidden relative">
            <SidebarComponent />
            <div className="flex flex-col w-full">
                <TopNavbar />
                { children }
            </div>
            <MobileBottombar />
        </main>
    )
}