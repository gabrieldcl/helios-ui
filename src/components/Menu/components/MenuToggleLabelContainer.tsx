import styled, { css } from 'styled-components'

const paddingStyle = css`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

export const MenuToggleLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${paddingStyle}
`
