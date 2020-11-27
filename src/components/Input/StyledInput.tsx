import styled, { css } from 'styled-components'
import { InputProps } from './Input'
import { ThemedProps } from '../../themeTypes'

// TODO: Add to theme

export type ThemedStyledInputProps = ThemedProps<InputProps>

export const paddingStyle = css`
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 0px;
  padding-bottom: 0px;
`

export const fontStyle = css`
  font-size: inherit;
  font-family: inherit;
  font-weight: normal;
  color: inherit;
`

export const marginStyle = css`
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
`

export const borderStyle = (color: string) => css`
  border-style: solid;
  border-color: ${color};

  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`

export const focusStyle = (props: ThemedStyledInputProps) => css`
  ${props.error
    ? !props.focus
      ? borderStyle(props.theme.colors.red)
      : borderStyle(props.theme.colors.red)
    : !props.focus
    ? borderStyle(props.theme.input.border.borderColor)
    : borderStyle(props.theme.input.focus.borderColor)};
  transition: all 250ms ease-out;
`

export const StyledInput = styled.input`
  display: block;
  height: 30px;
  border: 0;
  width: inherit;
  outline: none;
  background-color: ${(props: ThemedStyledInputProps) =>
    props.theme.input.backgroundColor};

  ${marginStyle}
  ${fontStyle}
  ${focusStyle}
  ${paddingStyle}
`
