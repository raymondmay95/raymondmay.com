import { AnimationProps } from "framer-motion"

export const dashboardPageAnimation: AnimationProps = {
    animate: {
        opacity: 1
    },
    transition: {
        duration: .25,
    },
}
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
export const widgetIconAnimation = {
    initial: {
        scale: 1
    },
    whileInView: {
        scale: .8,
        animationIterationCount: 3
    },
    transition: {
        delay: .25
    },
    layoutDependency: true
}
export const widgetContactAnimation = {
    initial: {
        scale: .8,
        opacity: 0
    },
    whileInView: {
        scale: 1,
        opacity: 1
    },
    transition: {
        delay: .25
    },
    layoutDependency: true
}