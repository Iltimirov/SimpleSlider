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
import {CURSOR_WIDTH, SLIDER_LINE_HEIGHT, SLIDER_WIDTH} from '../../constants'

type Props = {
  translateX: Animated.SharedValue<number>
}

type GestureContext = {
  startX: number
}

export const CursorPanGesture: React.FC<Props> = ({translateX}) => {
  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.startX + event.translationX, 0, SLIDER_WIDTH)
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
  top: -CURSOR_WIDTH - SLIDER_LINE_HEIGHT / 2,
  width: CURSOR_WIDTH * 2,
  height: CURSOR_WIDTH * 2,
})
