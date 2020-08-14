import styled, { css } from 'styled-components'
import { CollapsableProps } from './Collapsable'

type StyledCollpsableProps = {
  original: string
  maxHeight: string
} & CollapsableProps

const heightStyle = (props: StyledCollpsableProps) => css`
  max-height: ${props.open ? props.original : props.maxHeight};
`

export const StyledCollpsable = styled.div`
  ${heightStyle}
  overflow: hidden;
  transition: all 0.3s;
`
