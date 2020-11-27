import styled, { css } from 'styled-components'
import { ThemedProps } from '../../themeTypes'
import { SliderInputProps } from './SliderInput'

export type StyledSliderProps = { progress: number } & SliderInputProps
export type ThemedStyledSliderProps = ThemedProps<StyledSliderProps>

const thumbStyles = (props: ThemedStyledSliderProps) => css`
  width: ${props.theme.sliderInput.thumb.width};
  height: ${props.theme.sliderInput.thumb.height};
  border-radius: ${props.theme.sliderInput.thumb.borderRadius};
  background: ${props.theme.sliderInput.thumb.backgroundColor};
  cursor: pointer;
`

const backgroundStyle = (props: ThemedStyledSliderProps) => css`
  background: linear-gradient(
    90deg,
    ${props.theme.sliderInput.fill.backgroundColor} ${props.progress}%,
    ${props.theme.sliderInput.backgroundColor} ${props.progress}%
  );
`

export const StyledSlider = styled.input`
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 3;
  width: 100%;
  margin: 0px;
  height: ${(props: ThemedStyledSliderProps) => props.theme.sliderInput.height};
  border-radius: ${(props: ThemedStyledSliderProps) =>
    props.theme.sliderInput.borderRadius};
  ${backgroundStyle}
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${thumbStyles}
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }
`
