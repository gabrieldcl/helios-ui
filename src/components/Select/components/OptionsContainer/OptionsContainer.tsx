import styled from 'styled-components'

export const OptionsContainer = styled.div`
  width: 100%;
  background-color: white;
  z-index: 999;
  margin-top: -18px;
  position: absolute;
  overflow-y: scroll;
  max-height: 240px;
  ::-webkit-scrollbar {
    width: 3px;
    height: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    height: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #eeeeee;
    border-radius: 16px;
  }
  ::-webkit-scrollbar-thumb:vertical {
    height: 10px;
    background-color: #368df7;
    border: 1px solid #368df7;
    border-radius: 16px;
  }
`
