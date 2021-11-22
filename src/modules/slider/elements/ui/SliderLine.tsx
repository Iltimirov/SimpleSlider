import styled from 'styled-components/native'
import {Colors} from '../../../uikit'
import {SLIDER_LINE_HEIGHT} from '../../constants'

export const SliderLine = styled.View({
  height: SLIDER_LINE_HEIGHT,
  borderRadius: SLIDER_LINE_HEIGHT / 2,
  backgroundColor: Colors.GREY2,
})
