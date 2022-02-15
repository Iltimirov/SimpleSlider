import React, {useEffect} from 'react'
import {Text} from 'react-native'
import {Deps} from './App'
import {withDeps} from './withDeps'

type Props = {
  asyncReq: (str: string) => Promise<void>
  waiter: () => Promise<void>
}

const Asyncer: React.FC<Props> = ({asyncReq, waiter}) => {
  useEffect(() => {
    waiter().then(() => asyncReq('hello asyncer'))
  }, [])

  return <Text>Asyncer</Text>
}

const mapper = (deps: Deps) => ({
  asyncReq: deps.apiClient.get,
  waiter: deps.newDep.wait,
})

export const AsyncReq = withDeps(mapper)(Asyncer)
