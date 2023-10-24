import { SkillInfo } from "../models/Widget/SkillInfo";

const cloudflareSummary_ENG = 'Cloudflare is a global content delivery and cybersecurity company that provides services to enhance the performance, security, and reliability of websites and internet applications.'
const cssSummary_ENG = 'CSS (Cascading Style Sheets) is a web technology used to control the presentation and layout of HTML documents, allowing for the design and styling of web pages.'
const firebaseSummary_ENG = 'Firebase is a comprehensive mobile and web application development platform developed by Google, providing a wide range of services including real-time database, authentication, hosting, and analytics, enabling developers to build high-quality apps quickly and efficiently.'
const htmlSummary_ENG = 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages, defining the structure and content of a webpage using tags and elements.'
const nodeSummary_ENG = 'Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute server-side code using JavaScript, enabling efficient, non-blocking, event-driven applications.'
const reactSummary_ENG = 'React.js is an open-source JavaScript library for building user interfaces, developed and maintained by Facebook, that allows developers to create dynamic, interactive web applications with a component-based architecture.'
const reduxSummary_ENG = "Redux is a predictable state management library for JavaScript applications, commonly used with React. It helps centralize and manage the application's state in a single store, making it easier to maintain and update. Actions trigger state changes through reducers, ensuring a unidirectional data flow and simplifying the debugging and testing of complex applications."
const typescriptSummary_ENG = 'TypeScript is an open-source programming language developed by Microsoft that adds static typing to JavaScript, making it easier to catch and prevent errors during development and enhancing code maintainability.'


//---------------------
const CloudComputingSkill = new SkillInfo(
    'Cloudflare_Skill',
    'Cloudflare',
    'Functions and Deployment',
    cloudflareSummary_ENG,
    'https://developers.cloudflare.com/',
    'logos:cloudflare-icon'
);
const CSSSkill = new SkillInfo(
    'CSS_Skill',
    'CSS',
    'Web Development',
    cssSummary_ENG,
    'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'logos:css-3'
);

const FirebaseSkill = new SkillInfo(
    'Firebase_Skill',
    'Firebase',
    'Authentication',
    firebaseSummary_ENG,
    'https://firebase.google.com/docs',
    'logos:firebase'
)

const HtmlSkill = new SkillInfo(
    'HTML_Skill',
    'HTML',
    'Web Development',
    htmlSummary_ENG,
    'https://developer.mozilla.org/en-US/docs/Web/html',
    'logos:html-5'
);
const NodeJSSkill = new SkillInfo(
    'NodeJS_Skill',
    'NodeJS',
    'Software Development',
    nodeSummary_ENG,
    'https://nodejs.org/en/docs',
    'logos:nodejs-icon'
);
const ReactSkill = new SkillInfo(
    'ReactJS_Skill',
    'ReactJS',
    'Web Development',
    reactSummary_ENG,
    'https://react.dev/',
    'logos:react'
);
const ReduxSkill = new SkillInfo(
    'Redux_Skill',
    'Redux',
    'Web Development',
    reduxSummary_ENG,
    'https://redux.js.org/',
    'devicon:redux'
);
const TypeScriptSkill = new SkillInfo(
    'Typescript_Skill',
    'Typescript',
    'Web Development',
    typescriptSummary_ENG,
    'https://www.typescriptlang.org/docs/',
    'logos:typescript-icon'
);
export const MY_SKILLS = [
    ReactSkill,
    ReduxSkill,
    TypeScriptSkill,
]

export const OTHER_SKILLS = [
    CloudComputingSkill,
    CSSSkill,
    FirebaseSkill,
    HtmlSkill,
    NodeJSSkill,
];
