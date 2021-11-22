import React from 'react'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated'
import styled from 'styled-components/native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler'
import {clamp} from 'react-native-redash'
import {AbsoluteView} from '../../../uikit'
import {CURSOR_WIDTH, SCREEN_WIDTH} from '../../constants'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const CursorPanGesture: React.FC<Props> = ({translateX}) => {
  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startX: number}
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(
        ctx.startX + event.translationX,
        0,
        SCREEN_WIDTH - CURSOR_WIDTH,
      )
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    left: translateX.value - CURSOR_WIDTH,
  }))

  return (
    <AbsoluteView>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <PanView style={animatedStyle} />
      </PanGestureHandler>
    </AbsoluteView>
  )
}

const PanView = styled(Animated.View)({
  top: -22,
  width: CURSOR_WIDTH * 2,
  height: CURSOR_WIDTH * 2,
})
