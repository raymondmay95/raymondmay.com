import { orange, purple, blue, green, grey } from '@mui/material/colors';
import { formatDistance, } from 'date-fns';

export class TimelineEvent {
    public readonly ariaLabel: string;
    public readonly formatted_date_range: string;
    constructor(
        public readonly id: string,
        public readonly icon: string,
        public readonly color: string,
        public readonly company: string,
        public readonly role: string,
        public readonly start_date: Date,
        public readonly end_date: Date,
        public readonly content_list: string[],
    ) {
        this.formatted_date_range = formatDistance(start_date, end_date)

        this.ariaLabel = `${company}: ${role}`
    }
}
const PrivateEventDirector_Start_Date = new Date(2016, 8, 1);
const PrivateEventDirector_End_Date = new Date(2017, 12, 1);
const PrivateEventDirector = new TimelineEvent(
    'GEH_PED',
    'game-icons:candle-holder',
    purple[50],
    'Gourmet Events Hawaii',
    'Private Event Director',
    PrivateEventDirector_Start_Date,
    PrivateEventDirector_End_Date,
    ['I served high-end clients such as former President Obama and his family for Christmas, and thepresident with his staff during presidency.',
        'I maintained event location, delay, and cost through ADP portal.',
        'I operated company vehicles and maintained property used on event sites.'
    ]
);
const LEAD_BARTENTDER_Start_Date = new Date(2014, 8, 1);
const LEAD_BARTENTDER_End_Date = new Date(2018, 11, 1);
const LEAD_BARTENTDER = new TimelineEvent(
    'MW_LB',
    'guidance:bar',
    orange[50],
    'Morimoto Waikiki',
    'Lead Bartender',
    LEAD_BARTENTDER_Start_Date,
    LEAD_BARTENTDER_End_Date,
    [
        'I promoted to the bar in an extremely competitive environment.',
        'I seeked higher education in hospitality and achieved a Bar Smarts Certification.',
        'I maintained Point of Sale Systems, pricing and inventory, with BirchStreet and Aloha POS.'
    ]
);
const BAR_MANAGER_Start_Date = new Date(2018, 12, 1);
const BAR_MANAGER_End_Date = new Date(2021, 8, 1);
const BAR_MANAGER = new TimelineEvent(
    'PH_BM',
    'fluent-mdl2:party-leader',
    blue[50],
    'Paris.Hawaii',
    'Bar Manager',
    BAR_MANAGER_Start_Date,
    BAR_MANAGER_End_Date,
    [
        'I designed and implemented a bar menu incorporating drinks from the Années folles period in 1920’sFrance.',
        'I was awarded Most Valuable Employee in 2019, one year after employment.',
        'I maintain a healthy relationship with many of my patrons and contributed positivley to the companies image.'
    ]
);
const SOFTWARE_ENGINEER_STUDENT_Start_Date = new Date(2020, 10, 1);
const SOFTWARE_ENGINEER_STUDENT_End_Date = new Date(2021, 4, 1);
const SOFTWARE_ENGINEER_STUDENT = new TimelineEvent(
    'AA_SD',
    'ph:student',
    green[50],
    'App Academy',
    'Software Development',
    SOFTWARE_ENGINEER_STUDENT_Start_Date,
    SOFTWARE_ENGINEER_STUDENT_End_Date,
    [
        "Learned modern web technologies like React and Redux.",
        "Learned and practiced computer science fundamentals as approved by many industry leading companies.",
        "Tested regularly to insure 100% competency of all modules."
    ]
);
const SOFTWARE_ENGINEER_Start_Date = new Date(2021, 8, 1);
const SOFTWARE_ENGINEER_End_Date = new Date();
const SOFTWARE_ENGINEER = new TimelineEvent(
    'MMR_SD',
    'ant-design:code-twotone',
    grey[50],
    'Maui Resort Rentals Inc.',
    'Software Developer',
    SOFTWARE_ENGINEER_Start_Date,
    SOFTWARE_ENGINEER_End_Date,
    [
        "I successfully maintained and created a V2 version of the company's web app by meticulously analyzing user feedback, implementing innovative features, optimizing the codebase, and collaborating closely with the development team to ensure seamless integration of new functionalities, resulting in an enhanced user experience and improved overall performance.",
        "I leverage my expertise in TypeScript and React to deploy professional-level code, meticulously crafting robust and scalable web applications that not only meet but exceed industry standards. By combining the power of TypeScript's static typing with the flexibility of React components, I create efficient, maintainable, and highly interactive user interfaces, ensuring a seamless user experience while adhering to best practices in software development.",
        "I adeptly manage over 500 users across three applications by implementing proactive user support, conducting regular system audits, and swiftly addressing user concerns. Through meticulous monitoring and efficient communication, I ensure a seamless experience for each user while continuously optimizing the applications for enhanced performance and user satisfaction."
    ]
);

export const timelineEvents = [
    PrivateEventDirector,
    LEAD_BARTENTDER,
    BAR_MANAGER,
    SOFTWARE_ENGINEER_STUDENT,
    SOFTWARE_ENGINEER
]