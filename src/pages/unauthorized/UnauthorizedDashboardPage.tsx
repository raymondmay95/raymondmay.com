import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { CustomBreadCrumbs } from "../../sections/CustomBreadCrumbs";
import { UnauthorizedDashboardWidgetSection } from "../../sections/unauthorized/UnauthorizedDashboardSection";

const BREADCRUMBS = [
    { label: 'Home', href: '/unauthorized/dashboard' },
    { label: 'Dashboard', href: '/' },
]

export default function UnauthorizedDashboardPage() {

    return (
        <>
            <Helmet>
                <title>Welcome | Dashboard</title>
            </Helmet>
            <CustomBreadCrumbs
                links={BREADCRUMBS}
            />
            <Container maxWidth='xl'>
                <UnauthorizedDashboardWidgetSection />
            </Container>
        </>
    )
}
