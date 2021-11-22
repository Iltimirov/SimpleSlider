import React from 'react'
import Animated from 'react-native-reanimated'
import {SliderGestures, SliderUI, MinMaxLabel} from './elements'
import {useTranslateX, useUpdateValue} from './hooks'
import {SliderContainer} from './styled'

type Props = {
  min: number
  max: number
  step: number
  value: Animated.SharedValue<number>
}

export const Slider: React.FC<Props> = ({min, max, step, value}) => {
  const translateX = useTranslateX(min, max, value)
  useUpdateValue(min, max, step, translateX, value)

  return (
    <SliderContainer>
      <SliderUI translateX={translateX} />
      <SliderGestures translateX={translateX} />
      <MinMaxLabel min={min} max={max} />
    </SliderContainer>
  )
}
