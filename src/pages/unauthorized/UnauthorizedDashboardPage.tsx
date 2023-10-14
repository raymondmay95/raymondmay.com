import { Container, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { CustomBreadCrumbs } from "../../sections/CustomBreadCrumbs";
import { UnauthorizedDashboardSection } from "../../sections/unauthorized/UnauthorizedDashboardSection";

const BREADCRUMBS = [
    { label: 'Login', href: '/authorized/home' },
    { label: 'Home', href: '/' },
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
                <UnauthorizedDashboardSection />
            </Container>
        </>
    )
}