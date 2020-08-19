import styled, { css } from 'styled-components'
import { ThemedProps } from '../../theme'
import { SelectProps } from './Select'

export type ThemedStyledSelectProps = ThemedProps<SelectProps>

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

export const focusStyle = (props: ThemedStyledSelectProps) => css`
  ${props.error
    ? !props.focus
      ? borderStyle(props.theme.colors.red)
      : borderStyle(props.theme.colors.red)
    : !props.focus
    ? borderStyle(props.theme.input.border.borderColor)
    : borderStyle(props.theme.input.focus.borderColor)};
  color: ${props.theme.input.label.text.color};
  transition: all 250ms ease-out;
`

export const StyledSelect = styled.input`
  appearance: none;
  cursor: pointer;
  height: 30px;
  border: 0;
  width: inherit;
  outline: none;
  background-color: ${(props: ThemedStyledSelectProps) =>
    props.theme.input.backgroundColor};

  ${marginStyle}
  ${fontStyle}
  ${paddingStyle}
  ${focusStyle}
`
