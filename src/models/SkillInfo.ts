interface SkillsWidgetI {
    title: string;
    subHeader: string;
    content: string;
    navUrl: string;
    icon: string;
}

export class SkillInfo implements SkillsWidgetI {
    public readonly ariaLabel: string
    constructor(
        public readonly title: string,
        public readonly subHeader: string,
        public readonly content: string,
        public readonly navUrl: string,
        public readonly icon: string,
    ) {
        this.ariaLabel = `Skill ${title}:${subHeader}`
    }
}