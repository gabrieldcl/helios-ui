import styled, { css } from 'styled-components'
import { ThemedProps } from '../../../../themeTypes'
import { ProgressBarProps } from '../../ProgressBar'

type ThemedProgressbarContainer = ThemedProps<ProgressBarProps>

const baseStyle = (props: ThemedProgressbarContainer) => css`
  width: 100%;
  height: ${props.theme.progressBar.container.height};
  border-radius: ${props.theme.progressBar.container.borderRadius};
  background-color: ${props.theme.progressBar.container.backgroundColor};
`

export const ProgressBarContainer = styled.div`
  ${baseStyle}
`
