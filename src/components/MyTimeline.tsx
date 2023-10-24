import * as React from 'react';
import MuiTimeline from '@mui/lab/Timeline';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Iconify } from './Iconify';
import { TimelineEvent, timelineEvents } from './TimelineEvent';
import useResponsive from '../hooks/useResponsive';
import { Stack } from '@mui/material';
import { format } from 'date-fns';


interface MyTimelineI {
    selectedTimelineEvent: TimelineEvent | null,
    handleSelectedTimelineEvent(event: TimelineEvent | null): void
}

function TimelineItem({
    timelineEvent,
    align,
    handleSelectedTimelineEvent,
    selectedTimelineEvent
}: {
    timelineEvent: TimelineEvent,
    align?: 'right' | 'left'
} & MyTimelineI
) {
    const {
        formatted_date_range,
        company,
        role,
        icon,
        color,
        id,
        start_date,
        end_date
    } = timelineEvent
    const isSelected = id === selectedTimelineEvent?.id
    const isMobile = useResponsive('down', 'sm')
    const iconSize = isMobile ? 30 : 48

    return (
        <MuiTimelineItem
            aria-labelledby={`${company}: ${role}`} id={id}
            onClick={() => {
                handleSelectedTimelineEvent(timelineEvent)
            }}
            onMouseEnter={() => {
                handleSelectedTimelineEvent(timelineEvent)
            }}
        >
            <MuiTimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align={align}
                textTransform='capitalize'
            >
                <Stack>
                    <Typography
                        color={isSelected ? "primary" : "text.secondary"}
                        variant={isMobile ? "caption" : "body2"}
                    >
                        {`${format(start_date, 'M/yy')} - ${format(end_date, 'M/yy')}`}
                    </Typography>
                    <Typography
                        color={isSelected ? "primary" : "text.secondary"}
                        variant='caption'
                    >
                        {formatted_date_range}
                    </Typography>
                </Stack>
            </MuiTimelineOppositeContent>
            <MuiTimelineSeparator>
                <MuiTimelineConnector />
                <MuiTimelineDot sx={{ bgcolor: color, p: 2 }}>
                    <Iconify
                        height={iconSize}
                        width={iconSize}
                        sx={{ color: isSelected ? 'primary.dark' : 'text.disabled' }}
                        icon={icon}
                    />
                </MuiTimelineDot>
                <MuiTimelineConnector />
            </MuiTimelineSeparator>
            <MuiTimelineContent sx={{
                py: { xs: '5px', sm: '12px' },
                px: 2
            }}>
                <Stack>
                    <Typography
                        variant={isMobile ? "subtitle1" : "h6"}
                        component="span"
                        color={isSelected ? 'text.default' : 'text.disabled'}
                    >
                        {company}
                    </Typography>
                    <Typography
                        variant={isMobile ? "caption" : "body1"}
                        color={isSelected ? 'text.default' : 'text.disabled'}
                    >
                        {role}
                    </Typography>
                </Stack>
            </MuiTimelineContent>
        </MuiTimelineItem>
    )
}

export default function MyTimeline(props: MyTimelineI) {
    return (
        <MuiTimeline position="alternate">
            {timelineEvents.map((timelineEvent, i) => (
                <TimelineItem
                    {...props}
                    timelineEvent={timelineEvent}
                    key={`${timelineEvent.id}_${i}`}
                    align={i === 0 ? 'right' : undefined} />
            ))}
        </MuiTimeline>
    );
}