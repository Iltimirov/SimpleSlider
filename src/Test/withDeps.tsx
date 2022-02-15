import React, {useContext} from 'react'
import {Deps} from './App'
import {DepsContext} from './DepsContext'

export const withDeps =
  <R,>(mapping: (deps: Deps) => R) =>
  <P,>(Component: React.FC<P>): React.FC<Omit<P, keyof R>> =>
  (props) =>
    <Component {...(props as P)} {...mapping(useContext(DepsContext))} />
