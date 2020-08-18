import React, { memo, ReactNode } from 'react'
import { StyledHeading } from './StyledHeading'
import { PickDefaultProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface HeadingProps {
  style?: CSSObject
  color?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  weight?: string
  fontStyle?: string
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<HeadingProps> = {
  style: {},
  tag: 'h1',
  color: 'black',
  weight: '600',
  fontStyle: 'normal'
}

const HeadingComponent: React.FC<HeadingProps> = (props) => {
  return (
    <StyledHeading as={props.tag} {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledHeading>
  )
}

export const Heading = memo(HeadingComponent)
