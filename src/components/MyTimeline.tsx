import * as React from 'react';
import { motion } from 'framer-motion'
import MuiTimeline from '@mui/lab/Timeline';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Iconify } from './Iconify';
import { TimelineEvent, timelineEvents } from '../models/Widget/TimelineEvent';
import useResponsive from '../hooks/useResponsive';
import { Collapse, IconButton, Stack } from '@mui/material';
import { format, isToday } from 'date-fns';
import { SkillsContentViewArea } from '../sections/unauthorized/SkillsContentViewArea';
import { grey } from '@mui/material/colors';
import { widgetIconAnimation, widgetItemAnimation } from './widget/animationConfig';


interface MyTimelineI {
    selectedTimelineEvent: TimelineEvent | null,
    handleSelectedTimelineEvent(event: TimelineEvent | null): void
}

function TimelineItem({
    timelineEvent,
    align,
    handleSelectedTimelineEvent,
    selectedTimelineEvent,
    first
}: {
    timelineEvent: TimelineEvent,
    align?: 'right' | 'left',
    first: boolean,
} & MyTimelineI
) {
    const {
        ariaLabel,
        formatted_date_range,
        company,
        role,
        icon,
        color,
        id,
        start_date,
        end_date
    } = timelineEvent
    const animateOnNoSelectionPresent = selectedTimelineEvent === null
    const isSelected = id === selectedTimelineEvent?.id
    const isMobile = useResponsive('down', 'sm')
    const iconSize = isMobile ? 34 : 48

    const iconAnimation = animateOnNoSelectionPresent || isSelected
        ? widgetItemAnimation
        : widgetIconAnimation


    const textColor = isSelected ? "primary" : "text.secondary"
    const dateRangeString = isToday(end_date)
        ? `${format(start_date, 'M/yy')} - current`
        : `${format(start_date, 'M/yy')} - ${format(end_date, 'M/yy')}`

    return (
        <>
            <MuiTimelineItem
                aria-labelledby={ariaLabel}
                id={id}
                onClick={() => {

                    handleSelectedTimelineEvent(timelineEvent)
                }}
            >
                <MuiTimelineOppositeContent
                    align={align}
                    textTransform='capitalize'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        mt: 3,
                    }}
                >
                    <Typography
                        color={textColor}
                        variant='caption'
                        whiteSpace='nowrap'
                    >
                        {dateRangeString}
                    </Typography>
                    <Typography
                        color={textColor}
                        variant='caption'
                    >
                        {formatted_date_range}
                    </Typography>
                </MuiTimelineOppositeContent>
                <MuiTimelineSeparator>
                    <motion.div
                        {...iconAnimation}
                    >
                        <MuiTimelineDot sx={{
                            bgcolor:
                                isSelected
                                    ? color
                                    : grey[50],
                            p: 1
                        }}>
                            <Iconify
                                height={iconSize}
                                width={iconSize}
                                sx={{
                                    color:
                                        isSelected
                                            ? 'primary.dark'
                                            : 'text.disabled',
                                    m: .5
                                }}
                                icon={icon}
                            />
                        </MuiTimelineDot>
                    </motion.div>
                    <MuiTimelineConnector sx={{ minHeight: 5, maxHeight: 25 }} />
                </MuiTimelineSeparator>
                <MuiTimelineContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        mx: 1
                    }}>
                    <Typography
                        {...widgetItemAnimation}
                        component={motion.span}
                        variant='subtitle1'
                        color={isSelected ? 'text.default' : 'text.disabled'}
                    >
                        {company}
                    </Typography>
                    <Typography
                        {...widgetItemAnimation}
                        component={motion.span}
                        variant="subtitle2"
                        color={isSelected ? 'text.default' : 'text.disabled'}
                    >
                        {role}
                    </Typography>
                </MuiTimelineContent>
            </MuiTimelineItem >
            <Collapse
                aria-label={`${ariaLabel}: Content`}
                component='li'
                sx={{ listStyleType: 'none' }}
                in={isSelected}
            >
                <Stack
                    position='relative'
                    direction='row'
                    justifyContent='center'>
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 0,
                            top: 20
                        }}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleSelectedTimelineEvent(null)
                        }}
                    >
                        <Iconify
                            height={24}
                            width={24}
                            icon='solar:list-up-line-duotone'
                            color='text.disabled'
                        />
                    </IconButton>
                    <SkillsContentViewArea selectedTimelineEvent={timelineEvent} />
                </Stack>
            </Collapse>
        </>
    )
}

export default function MyTimeline(props: MyTimelineI) {
    return (
        <MuiTimeline
            position="alternate"
        >
            {timelineEvents.map((timelineEvent, i) => (
                <TimelineItem
                    {...props}
                    timelineEvent={timelineEvent}
                    key={`${timelineEvent.id}_${i}`}
                    align={i === 0 ? 'right' : undefined}
                    first={i === 0}
                />
            ))}
        </MuiTimeline>
    );
}