import React from 'react'
import {Text} from 'react-native'
import Animated from 'react-native-reanimated'

type Props = {
  min: number
  max: number
  step: number
  value: Animated.SharedValue<number>
}

export const Slider: React.FC<Props> = () => {
  return <Text>I'm slider</Text>
}
