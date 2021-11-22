import React from 'react'
import styled from 'styled-components/native'
import Animated, {useAnimatedStyle} from 'react-native-reanimated'
import {
  CURSOR_HALF_WIDTH,
  CURSOR_WIDTH,
  SLIDER_LINE_HEIGHT,
} from '../../constants'
import {AbsoluteView, Colors} from '../../../uikit'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const Cursor: React.FC<Props> = ({translateX}) => {
  const animatedStyle = useAnimatedStyle(() => ({
    left: translateX.value - CURSOR_HALF_WIDTH,
  }))

  return (
    <AbsoluteView>
      <CursorPosition style={animatedStyle}>
        <CursorElement />
      </CursorPosition>
    </AbsoluteView>
  )
}

const CursorPosition = styled(Animated.View)({
  top: SLIDER_LINE_HEIGHT / 2 - CURSOR_HALF_WIDTH,
})

const CursorElement = styled.View({
  width: CURSOR_WIDTH,
  height: CURSOR_WIDTH,
  borderRadius: CURSOR_HALF_WIDTH,
  backgroundColor: Colors.PRIMARY_LIGHT,
})
