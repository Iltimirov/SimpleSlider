import React, {useEffect, useState} from 'react'
import {Text} from 'react-native'
import {DepsContext} from './DepsContext'
import {Application} from './Application'

export type ProductService = () => void

export type Deps = {
  apiClient: {
    get: <R>(url: string) => Promise<R>
  }
  logger: {
    log: (str: string) => void
  }
  productModule: {
    service: ProductService
  }
  newDep: {
    wait: () => Promise<void>
  }
}

// const createProductModule = () => {
//   const state = createState()
//   const handlers = createHandlers()
//   return {
//     service: createService(state, handlers),
//   }
// }

const createContainer = async (): Promise<Deps> => {
  await new Promise((res) =>
    setTimeout(() => {
      res({})
    }, 500),
  )

  const createApiClient = () => {
    return {
      get: async <R,>(url: string) => {
        console.log('start fetching', url)
        return new Promise<R>((res) =>
          setTimeout(() => {
            console.log('success fetching', url)
            res(url as unknown as R)
          }, 1000),
        )
      },
    }
  }

  return {
    logger: {
      log: (str: string) => console.log('logger', str),
    },
    apiClient: createApiClient(),
    productModule: {
      service: () => console.log('from service'),
    },
    newDep: {
      wait: () =>
        new Promise((res) =>
          setTimeout(() => {
            res()
          }, 5000),
        ),
    },
  }
}

export const App: React.FC = () => {
  const [deps, setDeps] = useState<Deps | null>(null)

  useEffect(() => {
    createContainer().then(setDeps)
  }, [])

  if (!deps) {
    return <Text>Loading...</Text>
  }

  return (
    <DepsContext.Provider value={deps}>
      <Application name="didfjdi" />
    </DepsContext.Provider>
  )
}
