import styled from 'styled-components'
import { ThemedProps } from '../../../../themeTypes'
import { ProgressBarFillerProps } from './ProgressBarFiller'

type ThemedStyledProgressBarFiller = ThemedProps<ProgressBarFillerProps>

const getColor = (props: ThemedStyledProgressBarFiller) => {
  if (props.color) {
    return props.theme.colors[props.color]
  }
  return props.theme.colors.secondary
}

export const StyledProgressBarFiller = styled.div`
  width: ${(props: ThemedStyledProgressBarFiller) => props.value}%;
  height: 100%;
  background-color: ${(props: ThemedStyledProgressBarFiller) =>
    getColor(props)};
  border-radius: ${(props: ThemedStyledProgressBarFiller) =>
    props.theme.progressBar.filler.borderRadius};
  transition: width
      ${(props: ThemedStyledProgressBarFiller) =>
        props.theme.progressBar.filler.transitionTime},
    background-color
      ${(props: ThemedStyledProgressBarFiller) =>
        props.theme.progressBar.filler.transitionTime}
      ease-in-out;
`
