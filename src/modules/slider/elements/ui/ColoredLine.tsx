import React from 'react'
import styled from 'styled-components/native'
import Animated, {useAnimatedStyle} from 'react-native-reanimated'
import {AbsoluteView, Colors} from '../../../uikit'

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
  height: 4,
  borderRadius: 4,
  backgroundColor: Colors.PRIMARY,
})
