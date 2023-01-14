import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 5px;
  width: 100%;
  border: none;
  outline: none;

  background-color: #000000;
  color: #fff;

  font-weight: bold;

  cursor: pointer;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  & + & {
    margin-top: 5px;
  }
`;
