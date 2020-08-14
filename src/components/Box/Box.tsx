import React, { memo, ReactNode } from 'react'
import { StyledBox } from './StyledBox'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface BoxProps {
  style?: CSSObject
  direction?: string
  alignItems?: string
  alignContent?: string
  margin?: string
  padding?: string
  alignSelf?: string
  justifyContent?: string
  backgroundColor?: string
  height?: string
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<BoxProps> = {
  style: {},
  direction: 'row',
  alignItems: 'left',
  alignContent: '',
  margin: '0px',
  padding: '0px',
  alignSelf: '',
  justifyContent: '',
  backgroundColor: '',
  height: ''
}

const BoxComponent: React.FC<BoxProps> = (props) => {
  return (
    <StyledBox {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledBox>
  )
}

export const Box = memo(BoxComponent)
