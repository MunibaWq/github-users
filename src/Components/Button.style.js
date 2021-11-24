import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  background: #0079ff;
  border-radius: 6px;
  border: 2px solid #0079ff;
  color: #ffff;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  height: 2.5rem

  /* ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `} */
`;
