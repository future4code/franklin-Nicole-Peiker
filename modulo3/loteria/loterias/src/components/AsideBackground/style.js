import styled from 'styled-components';

export const Background = styled.svg`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  min-height: 800px;
  z-index: 0;

  @media (max-width: 940px) and (orientation: portrait) {
    transform: rotate(90deg);
    top: -250px;
    width: 100%;
  }
`;

// export const Rect = styled.div`
//   position: relative;
//   background: green;
//   width: 613px;
//   height: 1080px;
//   overflow: hidden;
// `;

// export const Circle = styled.div`
//   position: absolute;
//   background: #efefef;
//   background: grey;
//   width: 2100px;
//   height: 2100px;
//   right: -1950px;
//   top: -510px;
//   border-radius: 50%;
// `;
