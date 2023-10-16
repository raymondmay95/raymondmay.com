import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { UnauthorizedDashboardWidgetSection } from "../../sections/unauthorized/UnauthorizedDashboardSection";

export default function UnauthorizedDashboardPage() {

    return (
        <>
            <Helmet>
                <title>Welcome | Dashboard</title>
            </Helmet>
            <Container maxWidth='lg'>
                <UnauthorizedDashboardWidgetSection />
            </Container>
        </>
    )
}
