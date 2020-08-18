import styled from 'styled-components'
import { GridProps } from './Grid'

type StyledGridProps = Required<GridProps>

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  margin: ${(props) => props.theme.sizes[props.margin]};
  grid-template-columns: repeat(1, minmax(280px, auto));
  grid-template-rows: repeat(${(props) => props.rows}, auto);
  grid-auto-rows: minmax(${(props) => props.rowHeight}, auto);
  grid-gap: ${(props) => props.theme.sizes[props.margin]};
  justify-content: ${(props) => props.justifyContent};
  align-content: ${(props) => props.alignContent};
  grid-column-gap: ${(props) => props.columnGap};
  grid-row-gap: ${(props) => props.rowGap};

  @media screen and (min-width: 768px) {
    display: grid;
    margin: ${(props) => props.margin};
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    grid-template-rows: repeat(${(props) => props.rows}, auto);
    grid-auto-rows: minmax(${(props) => props.rowHeight}, auto);
    grid-gap: ${(props) => props.gap};
    justify-content: ${(props) => props.justifyContent};
    align-content: ${(props) => props.alignContent};
    grid-column-gap: ${(props) => props.columnGap};
    grid-row-gap: ${(props) => props.rowGap};
  }
`
