import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { UnauthorizedDashboardWidgetSection } from "../../sections/unauthorized/UnauthorizedDashboardSection";
import { MotionContainer } from "../../components/animate";

export default function UnauthorizedDashboardPage() {

    return (
        <>
            <Helmet>
                <title>Welcome | Dashboard</title>
            </Helmet>
            <Container
                maxWidth='lg'
            >
                <MotionContainer>
                    <UnauthorizedDashboardWidgetSection />
                </MotionContainer>
            </Container>
        </>
    )
}
