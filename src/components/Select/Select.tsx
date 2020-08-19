import React, { useState, useRef, useEffect } from 'react'
import { CSSObject } from 'styled-components'
import { StyledSelect } from './StyledSelect'
import { InputContainer, Label } from '../Input/components'
import { ComponentProps, StyledProps } from '../../typeHelpers'
import {
  OptionsContainer,
  SelectContainer,
  OuterContainer,
  Option,
  IconContainer,
  SelectError,
  DefaultIcon
} from './components'

export type Option = {
  label: string
  value: string | number
}

export type BaseSelectProps = {
  style?: CSSObject
  label?: string
  focus?: boolean
  options: Option[]
  error?: string
  onChange?: (option: Option) => void
}

export type SelectProps = ComponentProps<BaseSelectProps, 'input', 'onChange'>

export const Select: React.FC<StyledProps<SelectProps, 'input'>> = (props) => {
  const { error } = props
  const selectRef = useRef<HTMLInputElement>(null)

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [isFocused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  const handleSelect = (option: Option) => {
    if (props.onChange) {
      props.onChange(option)
    }
    setValue(option.label)
    setOpen(false)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    const node = selectRef.current
    if (node) {
      node.addEventListener('focus', handleFocus)
      node.addEventListener('blur', handleBlur)

      return () => {
        node.removeEventListener('focus', handleFocus)
        node.removeEventListener('blur', handleBlur)
      }
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener('click', closeMenu)
    } else {
      document.removeEventListener('click', closeMenu)
    }

    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [open])

  const handleOptions = (props: SelectProps) => {
    const { options } = props
    return options.map((option, index) => {
      return (
        <Option
          key={index}
          padding='small'
          onClick={() => handleSelect(option)}
        >
          {option.label}
        </Option>
      )
    })
  }

  return (
    <OuterContainer>
      <SelectContainer>
        <InputContainer onClick={() => setOpen(!open)}>
          <StyledSelect
            ref={selectRef}
            {...props}
            value={value}
            focus={isFocused}
            readOnly
          />
          <Label
            error={error || ''}
            focus={isFocused}
            textHandler={() => value}
          >
            {props.label}
          </Label>
          <IconContainer>
            <DefaultIcon color='#368DF7' />
          </IconContainer>
        </InputContainer>

        <OptionsContainer>{open && handleOptions(props)}</OptionsContainer>
      </SelectContainer>
      {props.error && <SelectError size='small'>{props.error}</SelectError>}
    </OuterContainer>
  )
}
