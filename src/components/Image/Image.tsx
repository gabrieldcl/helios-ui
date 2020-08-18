import React, { memo } from 'react'
import { StyledImage } from './StyledImage'
import { PickDefaultProps, StyledProps } from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface ImageProps {
  style?: CSSObject
  opacity?: string
  margin?: string
  border?: string
  alignSelf?: string
  borderRadius?: string
  src: string
}

const DEFAULT_PROPS: PickDefaultProps<ImageProps> = {
  style: {},
  opacity: '1',
  margin: '',
  border: '',
  borderRadius: '',
  alignSelf: ''
}

const ImageComponent: React.FC<StyledProps<ImageProps, 'img'>> = (props) => {
  return <StyledImage {...DEFAULT_PROPS} {...props} />
}

export const Image = memo(ImageComponent)
