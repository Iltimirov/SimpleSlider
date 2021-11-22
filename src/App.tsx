import React from 'react'
import {useSharedValue} from 'react-native-reanimated'
import {Slider} from './modules'

export const App: React.FC = () => {
  const value = useSharedValue(0)
  return <Slider min={0} max={100} step={10} value={value} />
}
