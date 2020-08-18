import React from 'react'
import { StyledMenuItemsContainer } from './StyledMenuItemsContainer'
import { ComponentPropsWithoutOmit, StyledProps } from '../../../../typeHelpers'

export type BaseMenuItemsContainerProps = {
  clean: boolean
  invertColors: boolean
  color: string
  isOpen: boolean
  link: boolean
}

export type MenuItemsContainerProps = ComponentPropsWithoutOmit<
  BaseMenuItemsContainerProps,
  'div'
>

export const MenuItemsContainer: React.FC<StyledProps<
  MenuItemsContainerProps,
  'div'
>> = (props) => {
  return (
    <StyledMenuItemsContainer {...props}>
      {props.children}
    </StyledMenuItemsContainer>
  )
}
