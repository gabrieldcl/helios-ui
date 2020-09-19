import React, { memo, ReactNode } from 'react'
import { ButtonSizeKeys } from '../../theme'
import { StyledButton } from './StyledButton'
import { ContentBox, IconContainer } from './components'
import {
  PickDefaultProps,
  ComponentProps,
  StyledProps
} from '../../typeHelpers'
import { CSSObject } from 'styled-components'

export interface BaseButtonProps {
  style?: CSSObject
  color?: string
  outline?: boolean
  ghost?: boolean
  size?: ButtonSizeKeys
  icon?: JSX.Element
  invert?: boolean
  children?: ReactNode
}

export type ButtonProps = ComponentProps<BaseButtonProps, 'button', 'color'>
export type ButtonDefaultProps = Omit<PickDefaultProps<BaseButtonProps>, 'icon'>

const DEFAULT_PROPS: ButtonDefaultProps = {
  color: 'secondary',
  outline: false,
  ghost: false,
  size: 'small',
  invert: false,
  style: {}
}

const ButtonComponent: React.FC<StyledProps<ButtonProps, 'button'>> = (
  props
) => {
  const handleInvertIcon = () => {
    if (props.invert) {
      return (
        <React.Fragment>
          {props.children}
          {props.icon && (
            <IconContainer invert={props.invert || DEFAULT_PROPS.invert}>
              {props.icon}
            </IconContainer>
          )}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {props.icon && (
          <IconContainer invert={props.invert || DEFAULT_PROPS.invert}>
            {props.icon}
          </IconContainer>
        )}
        {props.children}
      </React.Fragment>
    )
  }

  return (
    <StyledButton {...DEFAULT_PROPS} {...props}>
      <ContentBox size={props.size || DEFAULT_PROPS.size}>
        {handleInvertIcon()}
      </ContentBox>
    </StyledButton>
  )
}

export const Button = memo(ButtonComponent)
