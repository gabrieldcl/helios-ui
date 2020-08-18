import styled, { css } from 'styled-components'

const baseStyle = (props: any) => css`
  width: 100%;
  height: ${props.theme.progressBar.container.height};
  border-radius: ${props.theme.progressBar.container.borderRadius};
  background-color: ${props.theme.progressBar.container.backgroundColor};
`

export const StyledProgressBarContainer = styled.div`
  ${baseStyle}
`
