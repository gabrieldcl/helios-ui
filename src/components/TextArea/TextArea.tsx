import React, { memo, useState, useEffect, useRef } from 'react'
import { CSSObject } from 'styled-components'
import { StyledTextArea } from './StyledTextArea'
import { InputContainer, Label, Error } from '../Input/components'
import { ComponentProps, StyledProps } from '../../typeHelpers'

export type BaseTextAreaProps = {
  style?: CSSObject
  focus?: boolean
  label: string
  error?: string
}

export type TextAreaProps = ComponentProps<
  BaseTextAreaProps,
  'textarea',
  'focus'
>

const TextAreaComponent: React.FC<StyledProps<TextAreaProps, 'textarea'>> = (
  props
) => {
  const { error } = props
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setFocused] = useState(false)

  useEffect(() => {
    const node = textareaRef.current
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
    return textareaRef.current && textareaRef.current.value
  }

  return (
    <React.Fragment>
      <InputContainer error={error || ''}>
        <StyledTextArea
          error={error || ''}
          ref={textareaRef}
          focus={isFocused}
          {...props}
        />
        <Label error={error || ''} focus={isFocused} textHandler={handleText}>
          {props.label}
        </Label>
      </InputContainer>
      {props.error && <Error size='small'>{props.error}</Error>}
    </React.Fragment>
  )
}

export const TextArea = memo(TextAreaComponent)
