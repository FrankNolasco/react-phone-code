import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: max-content;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dbdfea;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0.2em;
  input,
  input:focus {
    width: 100%;
    border: none;
    outline: 0;
    padding: 0.6em 0.25em;
  }
  :hover {
    color: #3c4d62;
    background-color: #fff;
    border-color: #854fff;
    outline: 0;
    box-shadow: 0 0 0 3px rgb(133 79 255 / 10%);
  }
`;

export const FlagImg = styled.div`
  padding: 0 0.75em 0 0.2em;
  display: flex;
  cursor: pointer;
  align-items: center;
  img,
  .mark {
    margin: 0 0.5em 0 0.3em;
  }
`;

export const ButtonDown = styled.button`
  border: none;
  outline: 0;
  padding: 0;
  color: #3c4d62;
  display: flex;
  align-items: flex-end;
  align-self: baseline;
  cursor: pointer;
  background-color: transparent;
`;
