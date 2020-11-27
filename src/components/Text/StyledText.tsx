import styled, { css } from 'styled-components'
import { TextProps } from './Text'
import { ThemedProps } from '../../themeTypes'

type StyledTextProps = Required<TextProps>
type ThemedStyledTextProps = ThemedProps<StyledTextProps>

const sizeStyle = (props: ThemedStyledTextProps) => css`
  font-size: ${props.theme.sizes[props.size]};
`

export const StyledText = styled.span<StyledTextProps>`
  ${(props: ThemedStyledTextProps) => props.size && sizeStyle(props)};
  font-weight: ${(props: StyledTextProps) => props.weight};
  font-style: ${(props: StyledTextProps) => props.fontStyle};
  color: ${(props: ThemedStyledTextProps) => props.theme.colors[props.color]};
  word-break: ${(props: StyledTextProps) => props.wordBreak};
  text-align: ${(props: StyledTextProps) => props.textAlign};
`
