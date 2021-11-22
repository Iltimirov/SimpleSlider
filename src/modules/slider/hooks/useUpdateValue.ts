import Animated, {useAnimatedReaction} from 'react-native-reanimated'
import {round} from 'react-native-redash'
import {SLIDER_WIDTH} from '../constants'

export const useUpdateValue = (
  min: number,
  max: number,
  step: number,
  translateX: Animated.SharedValue<number>,
  value: Animated.SharedValue<number>,
) => {
  useAnimatedReaction(
    () => {
      const stepWidth = SLIDER_WIDTH / (max - min)
      return round(translateX.value / stepWidth / step) * step
    },
    (_value) => {
      if (value.value !== _value) {
        value.value = _value
      }
    },
  )
}
