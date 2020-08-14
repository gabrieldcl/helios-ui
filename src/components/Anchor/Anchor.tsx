import React, { memo, ReactNode } from 'react'
import { StyledAnchor } from './StyledAnchor'
import {
  PickDefaultProps,
  ComponentProps,
  StyledProps
} from '../../typeHelpers'
import { Sizes } from '../../theme'
import { CSSObject } from 'styled-components'

export interface BaseAnchorProps {
  style?: CSSObject
  color?: string
  size?: Sizes
  children?: ReactNode
  onClick?: () => void
  underline?: boolean
}

export type AnchorProps = ComponentProps<BaseAnchorProps, 'a', 'size' | 'color'>
export type AnchorDefaultProps = Omit<
  PickDefaultProps<BaseAnchorProps>,
  'onClick'
>

const DEFAULT_PROPS: AnchorDefaultProps = {
  style: {},
  color: 'secondary',
  size: 'medium',
  underline: false
}

const AnchorComponent: React.FC<StyledProps<AnchorProps, 'a'>> = (props) => {
  return (
    <StyledAnchor {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledAnchor>
  )
}

export const Anchor = memo(AnchorComponent)
