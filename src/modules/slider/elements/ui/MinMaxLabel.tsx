import React from 'react'
import styled from 'styled-components/native'
import {Text} from 'react-native'

type Props = {
  min: number
  max: number
}

export const MinMaxLabel: React.FC<Props> = ({min, max}) => {
  return (
    <Container>
      <Typography>{min}</Typography>
      <Typography>{max}</Typography>
    </Container>
  )
}

const Typography = styled.Text({
  color: 'black',
})

const Container = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: 16,
})
