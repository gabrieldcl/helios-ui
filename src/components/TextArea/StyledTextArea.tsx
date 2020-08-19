import styled, { css } from 'styled-components'
import { BaseTextAreaProps } from './TextArea'
import { ThemedProps } from '../../theme'

export type ThemedStyledTextAreaProps = ThemedProps<BaseTextAreaProps>

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
  margin-top: 11px;
`

export const borderStyle = (color: string) => css`
  border-style: solid;
  border-color: ${color};

  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`

export const scrollbarStyle = css`
  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    height: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #eeeeee;
    border-radius: 16px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    height: 10px;
    background-color: #368df7;
    border: 1px solid #368df7;
    border-radius: 16px;
  }
`

export const focusStyle = (props: ThemedStyledTextAreaProps) => css`
  ${props.error
    ? !props.focus
      ? borderStyle(props.theme.colors.red)
      : borderStyle(props.theme.colors.red)
    : !props.focus
    ? borderStyle(props.theme.input.border.borderColor)
    : borderStyle(props.theme.input.focus.borderColor)};
  transition: all 20ms ease-out;
`

export const StyledTextArea = styled.textarea`
  resize: none;
  height: 70px;
  border: 0;
  width: inherit;
  outline: none;
  background-color: ${(props: ThemedStyledTextAreaProps) =>
    props.theme.input.backgroundColor};

  ${scrollbarStyle}
  ${marginStyle}
  ${fontStyle}
  ${focusStyle}
  ${paddingStyle}
`
