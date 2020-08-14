import styled from 'styled-components'
import { ThemedProps, ButtonSizeKeys } from '../../../theme'

type ContentBoxProps = {
  size: ButtonSizeKeys
}
type ThemeContentBoxProps = ThemedProps<ContentBoxProps>

export const ContentBox = styled.div<ContentBoxProps>`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  justify-content: center;
  align-items: center;

  padding: ${(props: ThemeContentBoxProps) =>
    props.theme.button.sizes[props.size]};
  font-weight: ${(props: ThemeContentBoxProps) => props.theme.button.weight};
`
