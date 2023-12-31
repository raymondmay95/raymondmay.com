import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { UnauthorizedDashboardWidgetSection } from "../../sections/unauthorized/UnauthorizedDashboardSection";
import { m } from "framer-motion";
import { dashboardPageAnimation } from "../../components/widget/animationConfig";

export default function UnauthorizedDashboardPage() {

    return (
        <>
            <Helmet>
                <title>Welcome | Dashboard</title>
            </Helmet>
            <Container
                maxWidth='lg'
                component={m.div}
                {...dashboardPageAnimation}
            >
                <UnauthorizedDashboardWidgetSection />
            </Container>
        </>
    )
}
