import React, { useState, ReactNode, useEffect } from 'react'
import {
  ComponentProps,
  StyledProps,
  PickDefaultProps
} from '../../typeHelpers'
import {
  MenuContainer,
  MenuToggle,
  MenuItemsContainer,
  MenuItem,
  MenuToggleLabelContainer,
  MenuItemDivider,
  MenuToggleIconContainer
} from './components'

export type MenuItem = {
  label: string
  onClick: () => void
}

export type BaseMenuProps = {
  items?: (MenuItem | null)[]
  label?: string
  invertColors?: boolean
  icon?: ReactNode
  invertIcon?: boolean
  clean?: boolean
  color?: string
  link?: boolean
  onlyIcon?: boolean
}

export type MenuProps = ComponentProps<BaseMenuProps, 'button', 'label'>
export type MenuDefaultProps = Omit<
  PickDefaultProps<BaseMenuProps>,
  'icon' | 'label'
>

const DEFAULT_PROPS: MenuDefaultProps = {
  clean: false,
  invertIcon: false,
  invertColors: false,
  color: 'secondary',
  link: false,
  onlyIcon: false,
  items: []
}

export const Menu: React.FC<Omit<
  StyledProps<MenuProps, 'button'>,
  'onClick'
>> = (props) => {
  const { label, items, invertIcon, icon, onlyIcon } = props
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', closeMenu)
    } else {
      document.removeEventListener('click', closeMenu)
    }

    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [isOpen])

  const renderItems = () => {
    if (!items) {
      return
    }

    return items.map((item, index) => {
      if (!item) {
        return
      }
      const isLastItem = index === items.length - 1
      return (
        <React.Fragment key={index}>
          <MenuItem onClick={item.onClick} {...DEFAULT_PROPS} {...props}>
            {item.label}
          </MenuItem>
          {!isLastItem && <MenuItemDivider />}
        </React.Fragment>
      )
    })
  }

  const renderButtonContent = () => {
    if (!items ? true : !items.length) {
      return <MenuToggleLabelContainer>{label}</MenuToggleLabelContainer>
    }

    if (onlyIcon) {
      return <MenuToggleLabelContainer>{icon}</MenuToggleLabelContainer>
    }

    if (invertIcon) {
      return (
        <MenuToggleLabelContainer>
          {label}
          {icon && (
            <MenuToggleIconContainer invertIcon={invertIcon}>
              {icon}
            </MenuToggleIconContainer>
          )}
        </MenuToggleLabelContainer>
      )
    }

    return (
      <MenuToggleLabelContainer>
        {icon && (
          <MenuToggleIconContainer invertIcon={invertIcon}>
            {icon}
          </MenuToggleIconContainer>
        )}
        {label}
      </MenuToggleLabelContainer>
    )
  }

  return (
    <MenuContainer tabIndex={1}>
      <MenuToggle
        disabled={!items ? true : !items.length}
        onClick={openMenu}
        isOpen={isOpen}
        {...DEFAULT_PROPS}
        {...props}
      >
        {renderButtonContent()}
      </MenuToggle>

      {isOpen ? (
        <MenuItemsContainer
          link={props.link || DEFAULT_PROPS.link}
          isOpen={isOpen}
          clean={props.clean || DEFAULT_PROPS.clean}
          invertColors={props.invertColors || DEFAULT_PROPS.invertColors}
          color={props.color || DEFAULT_PROPS.color}
        >
          {renderItems()}
        </MenuItemsContainer>
      ) : null}
    </MenuContainer>
  )
}
