import React from 'react'
import {Text} from 'react-native'

type Props = {
  min: number
  max: number
  step: number
}

export const Slider: React.FC<Props> = () => {
  return <Text>I'm slider</Text>
}
