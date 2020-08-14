import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../theme'

export interface LabelProps {
  focus?: boolean
  error?: string
  textHandler: () => string | null
}

export type StyledLabelProps = Required<LabelProps>
export type ThemedStyledLabelProps = ThemedProps<StyledLabelProps>

export const marginStyle = css`
  margin-bottom: 5px;
  margin-left: 11px;
  margin-right: 11px;
  margin-top: 5px;
`

export const fontStyle = css`
  font-family: inherit;
  font-weight: normal;
`

export const focusStyle = (props: ThemedStyledLabelProps) => css`
  color: ${props.error
    ? props.theme.input.error.color
    : !props.focus && !props.textHandler()
    ? `${props.theme.input.label.text.color}`
    : `${props.theme.input.focus.labelColor}`};
  font-size: ${!props.focus && !props.textHandler() ? '16px' : '14px'};
  top: ${!props.focus && !props.textHandler() ? '15px' : '0px'};
`

export const errorStyle = (props: ThemedStyledLabelProps) => css`
  color: ${props.error
    ? props.theme.input.error.color
    : props.theme.input.label.text.color};
`

export const Label = styled.label<LabelProps>`
  position: absolute;
  left: 0;
  pointer-events: none;
  transition: all 250ms ease-out;

  ${focusStyle}
  ${fontStyle}
  ${marginStyle}
`
