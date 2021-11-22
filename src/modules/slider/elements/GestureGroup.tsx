import React from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'
import {CursorPanGesture, SliderTapHandler} from './gestures'

type Props = {
  translateX: Animated.SharedValue<number>
  showTooltip: Animated.SharedValue<boolean>
}

export const GestureGroup: React.FC<Props> = ({translateX, showTooltip}) => {
  return (
    <View>
      <SliderTapHandler translateX={translateX} showTooltip={showTooltip} />
      <CursorPanGesture translateX={translateX} showTooltip={showTooltip} />
    </View>
  )
}
