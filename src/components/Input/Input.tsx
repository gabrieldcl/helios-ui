import React, { memo, useState, useRef, useEffect } from 'react'
import { CSSObject } from 'styled-components'
import { StyledInput } from './StyledInput'
import { Label, InputContainer, Error } from './components'
import { ComponentProps, StyledProps } from '../../typeHelpers'

export type BaseInputProps = {
  style?: CSSObject
  type: string
  focus?: boolean
  label: string
  error: string
}

export type InputProps = ComponentProps<BaseInputProps, 'input', 'type'>

const InputComponent: React.FC<StyledProps<InputProps, 'input'>> = (props) => {
  const { error } = props
  const ref = useRef<HTMLInputElement>(null)

  const [isFocused, setFocused] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      const handleFocus = () => setFocused(true)
      const handleBlur = () => setFocused(false)
      node.addEventListener('focus', handleFocus)
      node.addEventListener('blur', handleBlur)

      return () => {
        node.removeEventListener('focus', handleFocus)
        node.removeEventListener('blur', handleBlur)
      }
    }
  }, [])

  const handleText = () => {
    return ref.current && ref.current.value
  }

  return (
    <React.Fragment>
      <InputContainer error={error}>
        <StyledInput ref={ref} focus={isFocused} {...props} />
        <Label
          error={error}
          focus={!!(isFocused || props.value)}
          textHandler={handleText}
        >
          {props.label}
        </Label>
      </InputContainer>
      {props.error && <Error size='small'>{props.error}</Error>}
    </React.Fragment>
  )
}

export const Input = memo(InputComponent)
