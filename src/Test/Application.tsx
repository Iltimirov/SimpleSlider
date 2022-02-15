import React from 'react'
import {Button, Text} from 'react-native'
import type {Deps, ProductService} from './App'
import {withDeps} from './withDeps'
import {AsyncReq} from './AsyncReq'

type Props = {
  name: string
  productService: ProductService
}

const InnerApp: React.FC<Props> = ({name, productService}) => {
  const onPress = () => {
    productService()
  }

  return (
    <>
      <Text>Hello {name}!</Text>
      <Button title="press me" onPress={onPress} />
      <AsyncReq />
    </>
  )
}

const mapper = (deps: Deps) => ({
  productService: deps.productModule.service,
})

export const Application = withDeps(mapper)(InnerApp)
