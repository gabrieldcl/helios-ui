import styled from 'styled-components'
import { GridItemProps } from './GridItem'

type StyledGridItemProps = Required<GridItemProps>

export const StyledGridItem = styled.div<StyledGridItemProps>`
  display: grid;
  grid-row: ${(props) => props.gridRow};
  padding: ${(props) => props.theme.sizes[props.padding]};
  background-color: ${(props) => props.theme.colors[props.bg]};
  justify-content: ${(props) => props.justifyContent};

  @media screen and (min-width: 768px) {
    display: grid;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.theme.colors[props.bg]};
    justify-content: ${(props) => props.justifyContent};
  }
`
