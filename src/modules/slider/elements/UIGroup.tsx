import React from 'react'
import {View} from 'react-native'
import Animated from 'react-native-reanimated'
import {SliderLine, ColoredLine, Cursor, Tooltip} from './ui'

type Props = {
  value: Animated.SharedValue<number>
  translateX: Animated.SharedValue<number>
  showTooltip: Animated.SharedValue<boolean>
}

export const UIGroup: React.FC<Props> = ({value, translateX, showTooltip}) => {
  return (
    <View>
      <SliderLine />
      <ColoredLine translateX={translateX} />
      <Cursor translateX={translateX} />
      <Tooltip
        value={value}
        translateX={translateX}
        showTooltip={showTooltip}
      />
    </View>
  )
}
