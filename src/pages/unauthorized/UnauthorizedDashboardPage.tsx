import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion'
import { UnauthorizedDashboardWidgetSection } from "../../sections/unauthorized/UnauthorizedDashboardSection";
import { varGrow } from "../../components/animate/variants/grow";

export default function UnauthorizedDashboardPage() {

    return (
        <>
            <Helmet>
                <title>Welcome | Dashboard</title>
            </Helmet>
            <Container
                component={motion.div}
                layoutRoot
                maxWidth='lg'
                {...varGrow({
                    durationIn: .25,
                    inX: {
                        opacityStart: 0,
                        opacityEnd: 1,
                        scaleEnd: 1,
                        scaleStart: .5
                    }
                }).inX}
            >
                <UnauthorizedDashboardWidgetSection />
            </Container>
        </>
    )
}
