import React from 'react'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

type Props = {
  min: number
  max: number
  step: number
  value: Animated.SharedValue<number>
}

export const Slider: React.FC<Props> = () => {
  return <Container></Container>
}

const Container = styled.View({
  height: 48,
  paddingTop: 8,
})
