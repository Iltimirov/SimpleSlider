import Animated, {useSharedValue} from 'react-native-reanimated'
import {SLIDER_WIDTH} from '../constants'

export const useTranslateX = (
  min: number,
  max: number,
  value: Animated.SharedValue<number>,
) => {
  const initialValue = (SLIDER_WIDTH / (max - min)) * (value.value - min)
  return useSharedValue(initialValue)
}
