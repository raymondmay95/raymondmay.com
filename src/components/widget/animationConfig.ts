export const widgetAnimation = {
    initial: {
        opacity: 0
    },
    whileInView: {
        opacity: 1
    },
    transition: {
        duration: .25,
        delay: .25
    },
    layoutRoot: true
}
export const widgetItemAnimation = {
    initial: {
        scale: .2
    },
    whileInView: {
        scale: 1
    },
    transition: {
        duration: .25
    },
    layoutDependency: true
}