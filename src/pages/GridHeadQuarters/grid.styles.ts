import styled, { keyframes } from 'styled-components';

export const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    /* border-radius: 50%; */
    background-color: var(--blue-light);
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  `;