import styled from 'styled-components';

export const Background = styled.svg`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  min-height: 1000px;
  z-index: 0;

  @media (max-width: 1024px) and (orientation: portrait) {
    transform: rotate(90deg);
    top: -380px;
    width: 100vw;
    min-height: 1250px;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    top: -440px;
    min-height: 1350px;
  }

  @media (max-width: 480px) and (orientation: portrait) {
    top: -450px;
    min-height: 1200px;
  }
`;
