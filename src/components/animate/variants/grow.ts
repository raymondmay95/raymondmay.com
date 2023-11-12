// @types
import { VariantsType } from '../types';
//
import { varTranEnter, varTranExit } from './transition';

type GrowVariant = 'inX' | 'inY' | 'outX' | 'outY';

type GrowVariantProps = {
  // start
  opacityStart?: number,
  scaleStart?: number,
  // completed
  opacityEnd?: number,
  scaleEnd?: number
}

export type GrowProps = VariantsType & {
  [variant in GrowVariant]?: GrowVariantProps;
};;

// ----------------------------------------------------------------------

export const varGrow = ({
  durationIn,
  durationOut,
  easeIn,
  easeOut,
  ...other
}: GrowProps) => {

  const {
    inX: _inX,
    inY: _inY,
    outX: _outX,
    outY: _outY
  } = other

  return {
    // IN
    inX: {
      initial: {
        scaleX: _inX?.scaleStart || 0,
        opacity: _inX?.opacityStart || 0
      },
      animate: {
        scaleX: _inX?.scaleEnd || 1,
        opacity: _inX?.opacityEnd || 1,
        transition: varTranEnter({ durationIn, easeIn })
      },
      exit: {
        scaleX: _inX?.scaleStart || 0,
        opacity: _inX?.opacityStart || 0,
        transition: varTranExit({ durationOut, easeOut })
      },
    },
    inY: {
      initial: {
        scaleY: _inY?.scaleStart || 0,
        opacity: _inY?.opacityStart || 0
      },
      animate: {
        scaleY: _inY?.scaleEnd || 1,
        opacity: _inY?.opacityEnd || 1,
        transition: varTranEnter({ durationIn, easeIn })
      },
      exit: {
        scaleY: _inY?.scaleStart || 0,
        opacity: _inY?.opacityStart || 0,
        transition: varTranExit({ durationOut, easeOut })
      },
    },

    // OUT
    outX: {
      initial: {
        scaleX: _outX?.scaleStart || 1,
        opacity: _outX?.opacityStart || 1
      },
      animate: {
        scaleX: _outX?.scaleEnd || 0,
        opacity: _outX?.opacityEnd || 0,
        transition: varTranEnter({ durationIn, easeIn })
      },
    },
    outY: {
      initial: {
        scaleY: _outY?.scaleStart || 1,
        opacity: _outY?.opacityStart || 1
      },
      animate: {
        scaleY: _outY?.scaleEnd || 0,
        opacity: _outY?.scaleEnd || 0,
        transition: varTranEnter({ durationIn, easeIn })
      },
    },
  };
};
