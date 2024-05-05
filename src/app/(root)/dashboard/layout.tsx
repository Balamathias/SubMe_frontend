import MobileBottombar from "@/components/dashboard/MobileBottombar";
import SidebarComponent from "@/components/sidebar";

export default function DashboardLayout ({ children }: {children: React.ReactNode}) {
    return( 
        <main className="flex h-screen w-full overflow-hidden relative">
            <SidebarComponent />
            <div className="flex flex-col gap-3 p-4 w-full">
                { children }
            </div>
            <MobileBottombar />
        </main>
    )
}