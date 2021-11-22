import React from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'
import {CursorPanGesture, SliderTapHandler} from './gestures'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const SliderGestures: React.FC<Props> = ({translateX}) => {
  return (
    <View>
      <SliderTapHandler translateX={translateX} />
      <CursorPanGesture translateX={translateX} />
    </View>
  )
}
