import styled from 'styled-components/native'
import {Colors} from '../uikit'
import {CURSOR_HALF_WIDTH} from './constants'

export const SliderContainer = styled.View({
  height: 48,
  paddingTop: 8,
  paddingHorizontal: CURSOR_HALF_WIDTH,
  backgroundColor: Colors.WHITE,
})
