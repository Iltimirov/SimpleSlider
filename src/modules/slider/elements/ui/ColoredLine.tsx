import React from 'react'
import styled from 'styled-components/native'
import Animated, {useAnimatedStyle} from 'react-native-reanimated'
import {AbsoluteView, Colors} from '../../../uikit'
import {SLIDER_LINE_HEIGHT} from '../../constants'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const ColoredLine: React.FC<Props> = ({translateX}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    width: translateX.value,
  }))

  return (
    <AbsoluteView>
      <ColoredLineComponent style={animatedStyle} />
    </AbsoluteView>
  )
}

const ColoredLineComponent = styled(Animated.View)({
  height: SLIDER_LINE_HEIGHT,
  borderRadius: SLIDER_LINE_HEIGHT / 2,
  backgroundColor: Colors.PRIMARY,
})
