import React from 'react'
import Animated, {useSharedValue} from 'react-native-reanimated'
import {GestureGroup, UIGroup} from './elements'
import {useTranslateX, useUpdateValue} from './hooks'
import {SliderContainer} from './styled'
import {MinMaxLabel} from './elements/ui'

type Props = {
  min: number
  max: number
  step: number
  value: Animated.SharedValue<number>
}

export const Slider: React.FC<Props> = ({min, max, step, value}) => {
  const translateX = useTranslateX(min, max, value)
  useUpdateValue(min, max, step, translateX, value)

  const showTooltip = useSharedValue(false)

  return (
    <SliderContainer>
      <UIGroup
        value={value}
        translateX={translateX}
        showTooltip={showTooltip}
      />
      <GestureGroup translateX={translateX} showTooltip={showTooltip} />
      <MinMaxLabel min={min} max={max} />
    </SliderContainer>
  )
}
