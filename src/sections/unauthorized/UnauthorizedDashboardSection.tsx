import { useRef, useState } from "react";
import { motion } from 'framer-motion'
import { Divider, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import MyTimeline from "../../components/MyTimeline";
import { MySkillsSection } from "./MySkillsSection";
import { OtherSkillsSection } from "./OtherSkillsSection";
import { TimelineEvent, timelineEvents } from "../../models/Widget/TimelineEvent";
import { ProfileSection } from "./ProfileSection";
import { widgetAnimation } from "../../components/widget/animationConfig";

export function UnauthorizedDashboardWidgetSection() {
    const isMobile = useResponsive('down', 'sm')
    const scrollRef = useRef<HTMLDivElement>(null)

    const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<TimelineEvent>(timelineEvents[timelineEvents.length - 1])

    const handleSelectedTimelineEvent = (event: TimelineEvent) => {
        setSelectedTimelineEvent(event)
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ block: isMobile ? 'end' : 'nearest' })
        }
    }

    return (
        <Grid container spacing={3}>
            <Grid
                item
                sm={12}
                component={motion.div}
                {...widgetAnimation}
            >
                <ProfileSection />
            </Grid>
            <Grid item xs={12}>
                <Divider light flexItem />
            </Grid>
            {/* --------------------- */}
            <Grid
                item
                xs={12}
            >
                <Typography
                    variant="h4"
                    color='text.disabled'>
                    My Skills
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                component={motion.div}
                {...widgetAnimation}
            >
                <MySkillsSection />
            </Grid>
            {/* --------------------- */}
            <Grid item sm={12} mt={1}>
                <Typography
                    variant="h4"
                    color='text.disabled'>
                    More Skills
                </Typography>
            </Grid>
            <Grid
                component={motion.div}
                {...widgetAnimation}
                item
                xs={12}>
                <OtherSkillsSection />
            </Grid>
            {/* --------------------- */}
            <Grid item xs={12}>
                <Divider light flexItem />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Typography
                    variant="h4"
                    color='text.disabled'>
                    My Timeline
                </Typography>
            </Grid>
            <Grid
                component={motion.div}
                {...widgetAnimation}
                item
                xs={12}
            >
                <MyTimeline
                    selectedTimelineEvent={selectedTimelineEvent}
                    handleSelectedTimelineEvent={handleSelectedTimelineEvent}
                />
            </Grid>
        </Grid >
    );
}
