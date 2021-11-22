import React from 'react'
import {Slider} from './modules'

export const App: React.FC = () => {
  // const value = useSharedValue(0)
  return <Slider min={0} max={100} step={10} />
}
