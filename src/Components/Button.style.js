import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width: 11rem;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
