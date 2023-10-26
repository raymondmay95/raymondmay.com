import { useRef, useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import MyTimeline from "../../components/MyTimeline";
import { MySkillsSection } from "./MySkillsSection";
import { OtherSkillsSection } from "./OtherSkillsSection";
import { TimelineEvent, timelineEvents } from "../../components/TimelineEvent";
import { ProfileSection } from "./ProfileSection";

export function UnauthorizedDashboardWidgetSection() {
    const isMobile = useResponsive('down', 'sm')
    const scrollRef = useRef<HTMLDivElement>(null)

    const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<TimelineEvent>(timelineEvents[isMobile ? 0 : timelineEvents.length - 1])

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
            >
                <ProfileSection />
                <Divider light flexItem sx={{ mt: 1 }} />
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
            >
                <MySkillsSection />
            </Grid>
            {/* --------------------- */}
            <Grid item sm={12}>
                <Typography
                    variant="h4"
                    color='text.disabled'>
                    More Skills
                </Typography>
            </Grid>
            <OtherSkillsSection />
            <Grid
                item
                sm={12}
            >
                <Divider light flexItem sx={{ mt: 1 }} />
            </Grid>
            {/* --------------------- */}
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
            <Grid item xs={12}>
                <MyTimeline
                    selectedTimelineEvent={selectedTimelineEvent}
                    handleSelectedTimelineEvent={handleSelectedTimelineEvent}
                />
                <Divider light flexItem sx={{ mt: 1 }} />
            </Grid>
        </Grid >
    );
}
