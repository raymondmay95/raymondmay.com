import { useRef, useState } from "react";
import { Divider, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { PROFILE_INFO } from "../../constents/PROFILE_INFO";
import { SocialLinks } from "../../components/SocialLinks";
import { ContactActions } from "../../components/ContactActions";
import { RMAvatar } from "../../components/RMAvatar";
import useResponsive from "../../hooks/useResponsive";
import MyTimeline from "../../components/MyTimeline";
import { MySkillsSection } from "./MySkillsSection";
import { OtherSkillsSection } from "./OtherSkillsSection";
import { TimelineEvent, timelineEvents } from "../../components/TimelineEvent";

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
        <Grid container spacing={4}>
            <Grid
                item
                sm={12}
            >
                <Stack>
                    <Grid
                        container
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        {isMobile &&
                            <Grid item>
                                <RMAvatar sx={{ width: 55, height: 55 }} />
                            </Grid>
                        }
                        <Grid item>
                            <Stack>
                                <Typography
                                    variant="h4"
                                >
                                    {PROFILE_INFO.title}
                                </Typography>
                                <Typography
                                    color='text.disabled'
                                    variant="subtitle1">
                                    {PROFILE_INFO.subheader}
                                </Typography>
                            </Stack>
                        </Grid>
                        {!isMobile &&
                            <Grid item>
                                <RMAvatar sx={{ width: 55, height: 55 }} />
                            </Grid>
                        }
                    </Grid>
                    <Typography
                        paragraph
                        variant="body1"
                        sx={{
                            textIndent: 8,
                            py: 1
                        }}
                    >
                        {PROFILE_INFO.content}
                    </Typography>
                    <Stack
                        direction='row'
                        justifyContent='flex-end'
                        alignItems='center'>
                        <ContactActions profileInfo={PROFILE_INFO} />
                        <SocialLinks links={PROFILE_INFO.social} />
                    </Stack>
                </Stack>
                <Divider flexItem sx={{ mt: 1 }} />
            </Grid>
            <Grid item container>
                <Grid item sm={7} xs={12}>
                    <MyTimeline
                        selectedTimelineEvent={selectedTimelineEvent}
                        handleSelectedTimelineEvent={handleSelectedTimelineEvent}
                    />
                </Grid>
                <Grid item sm={5} xs={12} ref={scrollRef}>
                    <List
                        subheader={
                            <ListItemText
                                primary={selectedTimelineEvent.company}
                                secondary={selectedTimelineEvent.formatted_date_range}
                            />
                        }
                    >
                        {selectedTimelineEvent.content_list.map((item, i) => (
                            <ListItem
                                disableGutters
                                disablePadding
                                key={`${selectedTimelineEvent.id}_content_${i}`}
                            >

                                <ListItemText
                                    secondary={item}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Typography
                    variant="h5"
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
            <Grid item sm={12}>
                <Typography
                    variant="h5"
                    color='text.disabled'>
                    More Skills
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <OtherSkillsSection />
            </Grid>
        </Grid >
    );
}
