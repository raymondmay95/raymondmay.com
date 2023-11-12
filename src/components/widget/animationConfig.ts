import { varFade, varScale } from "../animate"
import { VariantsType } from "../animate/types"
import { varGrow, GrowProps } from "../animate/variants/grow"

const _dashboardPageAnimationProps: VariantsType = {}
const _widgetAnimationProps: VariantsType = {}
const _widgetItemAnimationProps: VariantsType = {}
const _widgetIconAnimationProps: GrowProps = {
    durationIn: .25,
    inX: {
        scaleStart: .8,
        scaleEnd: 1
    }
}
const _widgetContactAnimationProps: GrowProps = {
    durationIn: .25,
    inX: {
        opacityStart: 0,
        opacityEnd: 1,
        scaleStart: .5,
        scaleEnd: 1
    }
}

export const dashboardPageAnimation = varFade(_dashboardPageAnimationProps)
export const widgetAnimation = varScale(_widgetAnimationProps)
export const widgetItemAnimation = varFade(_widgetItemAnimationProps)
export const widgetIconAnimation = varGrow(_widgetIconAnimationProps).inX
export const widgetContactAnimation = varGrow(_widgetContactAnimationProps).inX