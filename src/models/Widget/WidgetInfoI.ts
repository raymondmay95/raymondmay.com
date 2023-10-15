export interface WidgetInfoI {
    id: string;
    title: string;
    subheader: string;
    content: string;
}

export class WidgetInfo implements WidgetInfoI {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly subheader: string,
        public readonly content: string
    ) { }
}
