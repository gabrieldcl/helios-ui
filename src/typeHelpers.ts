import { Theme } from './theme'
import { StyledComponentProps, CSSObject } from 'styled-components'

export type DefaultProps<
  TComponentProps,
  TComponentPropKeys extends string | number | symbol
> = Required<Omit<TComponentProps, TComponentPropKeys>>

type RemoveUndefinedKeys<T> = T extends undefined ? never : T
type PickOptionalPropsKeys<T> = RemoveUndefinedKeys<
  {
    [K in keyof T]: undefined extends T[K] ? K : never
  }[keyof T]
>
type ExcludeChildrenKeys<T> = T extends 'children' ? never : T
type PickOptionalProps<T> = Pick<
  T,
  ExcludeChildrenKeys<PickOptionalPropsKeys<T>>
>

export type PickDefaultProps<
  T,
  K extends keyof PickOptionalProps<T> = keyof PickOptionalProps<T>
> = Required<Pick<T, K>>

export type ComponentProps<
  BProps,
  E extends keyof JSX.IntrinsicElements,
  OKey extends keyof BProps
> = BProps & Omit<JSX.IntrinsicElements[E], OKey>

export type ComponentPropsWithoutOmit<
  BProps,
  E extends keyof JSX.IntrinsicElements
> = BProps & JSX.IntrinsicElements[E]

export type StyledProps<
  P extends object,
  E extends keyof JSX.IntrinsicElements
> = StyledComponentProps<E, Theme, P, never>

export type Styles = {
  [K: string]: CSSObject
}
