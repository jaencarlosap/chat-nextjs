import styled, { css } from 'styled-components'

import { IHome, IInput } from 'interfaces/styles'

export const Wrapper = styled.div`
  background-color: #cccccc;
  background-image: url('/icons/floating-cogs.svg');
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const RoundContainer = styled.div<IHome>`
  width: ${props => (props.width ? props.width : '95%')};
  height: ${props => (props.height ? props.height : '50%')};
  overflow-y: auto;
  padding: 10px;
  border-radius: 20px;
  background-color: #f5f5f5;
  ${props =>
    props.align &&
    css`
      align-items: ${props.align};
      text-align: ${props.align};
      justify-content: ${props.align};
    `}
`

export const HasMessage = styled.div`
  margin: 10px 0;
  width: max-content;
  border-radius: 0px 5px 5px 5px;
  padding: 4px;
  background-color: #ffffff;

  & > p {
    margin: 2px;
  }

  & > p:nth-child(1) {
    font-size: 0.8rem;
  }

  & > p:nth-child(2) {
    font-size: 0.9rem;

    & > span {
      font-size: 0.7rem;
      margin-left: 10px;
    }
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputMessage = styled.input<IInput>`
  width: ${props => props.width || '90%'};
  height: 2em;
  padding: 5px;
  border-radius: 20px;
  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
      text-transform: capitalize;
    `}

  &:focus {
    outline: none;
  }
`

export const SendButton = styled.button`
  margin-left: 10px;
  padding: 0.5em;
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #000000;
  border-color: #d3d3d3;
  background-color: #ffffff;

  &:focus {
    outline: none;
  }
`

export const Title = styled.h1`
  font-size: 1.5em;
`
