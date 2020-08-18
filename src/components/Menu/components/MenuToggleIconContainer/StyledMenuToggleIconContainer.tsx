import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../../theme'
import { MenuToggleIconContainerProps } from './MenuToggleIconContainer'

type StyledMenuToggleIconContainerProps = ThemedProps<
  MenuToggleIconContainerProps
>

const spacingStyle = (props: StyledMenuToggleIconContainerProps) => {
  if (props.invertIcon) {
    return css`
      margin-left: ${props.theme.menu.iconSpacing};
    `
  }

  return css`
    margin-right: ${props.theme.menu.iconSpacing};
  `
}

export const StyledMenuToggleIconContainer = styled.div<
  StyledMenuToggleIconContainerProps
>`
  ${spacingStyle}
`
