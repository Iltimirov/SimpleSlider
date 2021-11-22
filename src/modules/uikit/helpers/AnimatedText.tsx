import React from 'react'
import Animated, {useAnimatedProps} from 'react-native-reanimated'
import AnimateableText from 'react-native-animateable-text'

type Props = {
  value: Animated.SharedValue<number>
}

export const AnimatedText: React.FC<Props> = ({value}) => {
  const animatedProps = useAnimatedProps(() => ({
    text: `Значение value = ${value.value}`,
  }))
  return <AnimateableText animatedProps={animatedProps} />
}
