import styled, { css } from 'styled-components'
import { HeadingProps } from './Heading'
import { ThemedProps } from '../../theme'

type StyledHeadingProps = Required<HeadingProps>
type ThemedStyledHeadingProps = ThemedProps<StyledHeadingProps>

const sizeStyle = (props: ThemedStyledHeadingProps) => css`
  font-size: ${props.theme.heading.tags[props.tag].size};
`

export const StyledHeading = styled.h1<StyledHeadingProps>`
  ${(props: ThemedStyledHeadingProps) => props.tag && sizeStyle(props)}
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fontStyle};
  color: ${(props) => props.theme.colors[props.color]};
`
