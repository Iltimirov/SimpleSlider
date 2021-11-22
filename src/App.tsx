import React from 'react'
import {useSharedValue} from 'react-native-reanimated'
import {AnimatedText, CenterView, Slider} from './modules'

export const App: React.FC = () => {
  const value = useSharedValue(5)
  return (
    <CenterView>
      <Slider min={0} max={10} step={1} value={value} />
      <AnimatedText value={value} />
    </CenterView>
  )
}
