import React, { useState } from 'react'
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventContentArg,
    formatDate,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { Button, Card, Container, Drawer, Stack } from '@mui/material'
import { ViewAgendaOutlined } from '@mui/icons-material'

interface CalendarState {
    weekendsVisible: boolean
    currentEvents: EventApi[]
}

export default function Calendar() {
    const [state, setState] = useState<CalendarState>({
        weekendsVisible: true,
        currentEvents: []
    })
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const handleOpenSidebar = () => {
        setSidebarOpen(true)
    }
    const handleCloseSidebar = () => {
        setSidebarOpen(false)
    }
    const handleDateSelect = (selectInfo: DateSelectArg) => {
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        calendarApi.addEvent({
            id: createEventId(),
            title: 'TODO: Ask for title',
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
        })
    }
    const handleEventClick = (clickInfo: EventClickArg) => {
        clickInfo.event.remove()
    }

    const handleEvents = (events: EventApi[]) => {
        setState((prev) => ({
            ...prev,
            currentEvents: events
        }))
    }
    return (
        <>
            <Container disableGutters maxWidth='md' sx={{ position: 'relative' }}>
                <Card sx={{ p: 2 }}>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={state.weekendsVisible}
                        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                        select={handleDateSelect}
                        eventContent={renderEventContent} // custom render function
                        eventClick={handleEventClick}
                        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                    />
                    <Stack flexDirection='row' justifyContent='flex-end' mt={1}>
                        <Button endIcon={<ViewAgendaOutlined />} onClick={handleOpenSidebar}>More Info</Button>
                    </Stack>
                </Card>
            </Container>
            <Drawer open={sidebarOpen} anchor='right' variant='temporary' onClose={handleCloseSidebar}>
                <Stack maxWidth={250} px={2}>
                    <CalendarSidebar state={state} setState={setState} />
                </Stack>
            </Drawer>
        </>
    )
}

function CalendarSidebar({ state, setState }: { state: CalendarState, setState: React.Dispatch<React.SetStateAction<CalendarState>> }) {
    const handleWeekendsToggle = () => {
        setState((prev) => ({
            ...prev,
            weekendsVisible: !prev.weekendsVisible
        }))
    }
    return (
        <div className='demo-app-sidebar'>
            <div className='demo-app-sidebar-section'>
                <h2>Instructions</h2>
                <ul>
                    <li>Select dates and you will be prompted to create a new event</li>
                    <li>Drag, drop, and resize events</li>
                    <li>Click an event to delete it</li>
                </ul>
            </div>
            <div className='demo-app-sidebar-section'>
                <label>
                    <input
                        type='checkbox'
                        checked={state.weekendsVisible}
                        onChange={handleWeekendsToggle}
                    ></input>
                    toggle weekends
                </label>
            </div>
            <div className='demo-app-sidebar-section'>
                <h2>All Events ({state.currentEvents.length})</h2>
                <ul>
                    {state.currentEvents.map(renderSidebarEvent)}
                </ul>
            </div>
        </div>
    )
}

function renderEventContent(eventContent: EventContentArg) {
    return (
        <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
        </>
    )
}

function renderSidebarEvent(event: EventApi) {
    return (
        <li key={event.id} style={{ color: event.allDay ? 'green' : 'red' }}>
            <b>{formatDate(event.start!, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
            <i>{event.title}</i>
        </li>
    )
}