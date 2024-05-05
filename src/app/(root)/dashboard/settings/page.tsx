import WidthWrapper from "@/components/WidthWrapper"
import { BreadcrumbComponent } from "@/components/dashboard/BreadCrumbComponent"

const Settings = () => {
    return (
        <WidthWrapper>
            <BreadcrumbComponent items={[
                { title: 'Dashboard', href: '/dashboard' },
                { title: 'Settings' }
            ]} />
        </WidthWrapper>
    )
}

export default Settings