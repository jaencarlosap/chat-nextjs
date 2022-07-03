import React from 'react'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  background-color: #cccccc;
  background-image: url('/icons/floating-cogs.svg');
  background-repeat: repeat;
  width: 100%;
`

export const Container = styled.div<HTMLDivElement | React.CSSProperties>`
  height: ${props => props.height || 'auto'};
  display: flex;
  padding: ${props => props.padding || '0%'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'initial'};
  justify-content: ${props => props.justifyContent || 'initial'};
`

export const ContainerScroll = styled.div<HTMLDivElement | React.CSSProperties>`
  width: ${props => (props.width ? props.width : '95%')};
  height: ${props => (props.height ? props.height : '50%')};
  overflow: ${props => (props.overflow ? props.overflow : 'scroll')};
  box-sizing: content-box;
  padding: 10px;
  border-radius: 20px;
  background-color: #f5f5f5;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
    text-align: ${props.textAlign};
    justify-content: ${props.justifyContent};
  `}

  &::-webkit-scrollbar{
    width: 0;
    height: 0;
  }

  @media (max-width: 900) {
    width: 100%;
  }
`

export const HasMessage = styled.div<HTMLDivElement | React.CSSProperties>`
  margin: 10px 0;
  width: max-content;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0px 5px 5px 5px')};
  padding: 4px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};

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
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputTextContainer = styled.div`
  border-radius: 20px;
  padding: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.screens.sm} {
    flex-direction: column;
    
    & > input{
      width: 100%;
      border-radius: 20px;
    }
  }
`

export const InputMessage = styled.input<HTMLInputElement | React.CSSProperties>`
  width: ${props => props.width || '90%'};
  height: 2em;
  padding: 5px;
  border-radius: ${props => props.borderRadius || '20px'};

  ${props =>
		props.fontSize && css`
      font-size: ${props.fontSize};
      text-transform: capitalize;
    `}

  &:focus {
    outline: none;
  }
`

export const RoundButton = styled.button`
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
  
  &:disabled {
    background-color: #dddcdcc1;
  }
`

export const Title = styled.h1`
  font-size: 1.5em;
`
