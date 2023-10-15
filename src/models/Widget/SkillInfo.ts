import { WidgetInfoI, WidgetInfo } from "./WidgetInfoI";

interface SkillsWidgetI extends WidgetInfoI {
    content: string;
    navUrl: string;
    icon: string;
}

export class SkillInfo extends WidgetInfo implements SkillsWidgetI {
    public readonly ariaLabel: string
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly subheader: string,
        public readonly content: string,
        public readonly navUrl: string,
        public readonly icon: string,
    ) {
        super(
            id,
            title,
            subheader,
            content
        )
        this.ariaLabel = `Skill ${title}:${subheader}`
    }
}