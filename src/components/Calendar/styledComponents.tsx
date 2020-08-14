import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  width: 300px;
  height: auto;
  border-radius: 6px;
  padding: 12px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.03);
  border: solid 1px #efefef;
  background-color: #ffffff;
`

export const WeekDay = styled.div`
  text-align: center;
  font-weight: normal;
  color: #2b2b2b;
  font-size: 16px;

  height: 100%;
`

export const MonthDay = styled.div`
  text-align: center;
  font-weight: normal;
  color: #6d6d6d;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;

  height: 100%;
`
