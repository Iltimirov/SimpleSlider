import React from 'react'
import Animated, {withTiming} from 'react-native-reanimated'
import {
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import {clamp} from 'react-native-redash'
import {AbsoluteView} from '../../../uikit'
import {CURSOR_WIDTH, SLIDER_LINE_HEIGHT, SLIDER_WIDTH} from '../../constants'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const SliderTapHandler: React.FC<Props> = ({translateX}) => {
  const tapGestureHandler = (e: TapGestureHandlerStateChangeEvent) => {
    'worklet'
    if (e.nativeEvent.state === State.BEGAN) {
      translateX.value = withTiming(e.nativeEvent.x)
    }
  }
  return (
    <AbsoluteView>
      <TapGestureHandler onHandlerStateChange={tapGestureHandler}>
        <TapGestureField />
      </TapGestureHandler>
    </AbsoluteView>
  )
}

const TapGestureField = styled.View({
  top: -CURSOR_WIDTH - SLIDER_LINE_HEIGHT / 2,
  width: SLIDER_WIDTH,
  height: CURSOR_WIDTH * 2,
})
