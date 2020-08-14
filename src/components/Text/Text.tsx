import React, { memo, ReactNode } from 'react'
import { StyledText } from './StyledText'
import { PickDefaultProps } from '../../typeHelpers'
import { Sizes } from '../../theme'
import { CSSObject } from 'styled-components'

export interface TextProps {
  style?: CSSObject
  size?: Sizes
  textAlign?: string
  color?: string
  wordBreak?: string
  weight?: string
  fontStyle?: string
  children: ReactNode
}

const DEFAULT_PROPS: PickDefaultProps<TextProps> = {
  style: {},
  size: 'medium',
  textAlign: 'left',
  fontStyle: 'normal',
  weight: '400',
  color: 'black',
  wordBreak: 'break-word'
}

const TextComponent: React.FC<TextProps> = (props) => {
  return (
    <StyledText {...DEFAULT_PROPS} {...props}>
      {props.children}
    </StyledText>
  )
}

export const Text = memo(TextComponent)
