import WidthWrapper from "@/components/WidthWrapper"
import { BreadcrumbComponent } from "@/components/dashboard/BreadCrumbComponent"

const TransactionPage = () => {
    return (
        <WidthWrapper>
            <BreadcrumbComponent
                items={[
                    { title: "Dashboard", href: "/dashboard" },
                    { title: "Transactions" }
                ]}
            />
            <div className="flex flex-col gap-3">
                {/* <TransactionTable /> */}
            </div>
        </WidthWrapper>
    )
}

export default TransactionPage