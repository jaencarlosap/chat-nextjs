import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: #cccccc;
  background-image: url('/icons/floating-cogs.svg');
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListMessage = styled.div`
  width: 95%;
  height: 50%;
  overflow-y: auto;
  padding: 10px;
  border-radius: 20px;
  background-color: #f5f5f5;
`;

export const HasMessage = styled.div`
  margin: 10px 0;
  width: max-content;
  border-radius: 0px 5px 5px 5px;
  padding: 8px;
  background-color: #ffffff;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputMessage = styled.input`
  width: 90%;
  height: 2em;
  padding: 5px;
  border-radius: 20px;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  padding: 0.5em;
  border-radius: 2em;
  border-color: #d3d3d3;
  display: flex;
  background-color: #ffffff;

  &:focus {
    outline: none;
  }
`;
