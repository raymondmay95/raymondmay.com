import { WidgetInfo, WidgetInfoI } from "./WidgetInfoI";

interface SocialLink {
    title: string,
    url: string
}

export interface ProfileInfoI extends WidgetInfoI {
    phone: string,
    email: string,
    social: SocialLink[]
}

export class ProfileInfo extends WidgetInfo implements ProfileInfoI {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly subheader: string,
        public readonly phone: string,
        public readonly email: string,
        public readonly social: SocialLink[],
        public readonly content: string,
    ) {
        super(id, title, subheader, content)
    }
}
