import React from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'
import {SliderLine, ColoredLine, Cursor} from './ui'

type Props = {
  translateX: Animated.SharedValue<number>
}

export const UIGroup: React.FC<Props> = ({translateX}) => {
  return (
    <View>
      <SliderLine />
      <ColoredLine translateX={translateX} />
      <Cursor translateX={translateX} />
    </View>
  )
}
