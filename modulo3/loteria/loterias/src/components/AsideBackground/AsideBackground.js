import React from 'react';
import { Background, Circle, Rect } from './style';

const AsideBackground = props => {
  return (
    <Background
      viewBox="0 0 613 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
        fill={props.color}
      />
    </Background>
  );
};

export default AsideBackground;
