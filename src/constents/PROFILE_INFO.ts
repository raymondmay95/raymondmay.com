import { ProfileInfo } from "../models/Widget/ProfileInfo";

// Contact Information
const CONTACT_NAME = 'Raymond-Arthur K. May'

const CONTACT_SUBHEADER = 'Software Engineer, Bartender, Surfer'

const CONTACT_PHONE = '8082643099'

const CONTACT_EMAIL = 'raymond.may.95@outlook.com'

const CONTACT_DESCRIPTION = `
As a software engineer, I'm passionate about creating innovative solutions
to real-world problems, constantly exploring new technologies and pushing
the boundaries of what's possible in the digital realm. When I'm not immersed
in the world of coding, I'm also a skilled bartender, crafting delicious cocktails
and providing memorable experiences for patrons. And on the weekends, you'll often
find me catching waves as a dedicated surfer, connecting with nature and riding
the ocean's energy.
`

// Social Media
const SOCIAL_LINKEDIN = { title: 'LinkedIn', url: 'https://www.linkedin.com/in/coderay/' }

const SOCIAL_GITHUB = { title: 'GitHub', url: 'https://github.com/raymondmay95' }

const SOCIALS = [SOCIAL_LINKEDIN, SOCIAL_GITHUB]

export const PROFILE_INFO = new ProfileInfo(
    'Profile_Info',
    CONTACT_NAME,
    CONTACT_SUBHEADER,
    CONTACT_PHONE,
    CONTACT_EMAIL,
    SOCIALS,
    CONTACT_DESCRIPTION
);
