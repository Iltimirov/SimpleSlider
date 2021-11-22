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
import {CURSOR_HALF_WIDTH, CURSOR_WIDTH, SLIDER_WIDTH} from '../../constants'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const SliderTapHandler: React.FC<Props> = ({translateX}) => {
  const tapGestureHandler = (e: TapGestureHandlerStateChangeEvent) => {
    'worklet'
    if (e.nativeEvent.state === State.BEGAN) {
      translateX.value = withTiming(
        clamp(e.nativeEvent.x - CURSOR_HALF_WIDTH, 0, SLIDER_WIDTH),
      )
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
  top: -22,
  width: SLIDER_WIDTH,
  height: CURSOR_WIDTH * 2,
})
