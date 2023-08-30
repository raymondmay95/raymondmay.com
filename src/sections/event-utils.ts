import { EventInput } from '@fullcalendar/core'
import { green } from '@mui/material/colors'
import { format, startOfDay } from 'date-fns'

let eventGuid = 0
let todayStr = format(new Date(), 'yyyy-mm-dd') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr,
        allDay: true,
        end: todayStr,
        backgroundColor: green[50]
    },
    {
        id: createEventId(),
        title: 'Timed event',
        allDay: false,
        start: format(startOfDay(new Date()), 'yyyy-mm-dd')
    }
]

export function createEventId() {
    return String(eventGuid++)
}