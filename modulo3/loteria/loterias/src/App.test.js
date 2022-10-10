import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
// import AsideBackground from './components/AsideBackground/AsideBackground';
import Select from './components/Select/Select';

test('teste', () => {
  expect(4).toBe(4);
});

// test('AsideBackground component renders', () => {
//   render(<Select />);
//   const lotteryComponent = screen.getByText('mega-sena');
//   expect(lotteryComponent).toBeInTheDocument();
// });

// toEqual - checa igualdade de arrays, usar pra testar o retorno do sorteio
// toContain um valor no array
