import React, { useState, useEffect } from 'react'
import { StyledProps, PickDefaultProps } from '../../typeHelpers'
import { DropContainer, DropToggle, DropItemContainer } from './components'
import { Box } from '../Box'

export type BaseDropProps = {
  dropItem: JSX.Element
  color?: string
}

export type DropProps = BaseDropProps
export type DropDefaultProps = PickDefaultProps<BaseDropProps>

const DEFAULT_PROPS: DropDefaultProps = {
  color: 'white'
}

export const Drop: React.FC<Omit<StyledProps<DropProps, 'em'>, 'onClick'>> = (
  props
) => {
  const { dropItem, color } = props
  const [isOpen, setIsOpen] = useState(false)

  const openDrop = () => {
    setIsOpen(true)
  }
  const closeDrop = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', closeDrop)
    } else {
      document.removeEventListener('click', closeDrop)
    }

    return () => {
      document.removeEventListener('click', closeDrop)
    }
  }, [isOpen])

  const renderItems = () => {
    return (
      <Box direction='column' backgroundColor={color || DEFAULT_PROPS.color}>
        {dropItem}
      </Box>
    )
  }

  return (
    <DropContainer tabIndex={1}>
      <DropToggle
        onClick={openDrop}
        isOpen={isOpen}
        {...DEFAULT_PROPS}
        {...props}
      >
        {props.children}
      </DropToggle>

      {isOpen ? <DropItemContainer>{renderItems()}</DropItemContainer> : null}
    </DropContainer>
  )
}
