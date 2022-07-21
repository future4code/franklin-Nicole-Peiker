import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { calculateCartPrice } from './global/GlobalState';
import CartButton from './components/CartButton/CartButton';
import ProductsScreen from './screens/ProductsScreen/ProductsScreen';

// verifica total do carrinho com mais de um item

// Test('Total cart should be 70,00', () => {
//   render(<CartButton />);
//   const total = screen.getByText(/total/i)

//   const productCard = screen.getByRole()
//   const priceItem = screen.

// });

//input valor minimo >=
test('Verificar o valor dos inputs', () => {
  render(<ProductsScreen />);

  const inputMinimo = screen.getByPlaceholderText(/mínimo/i);
  userEvent.type(inputMinimo, 10);

  // const inputMaximo = screen.getByPlaceholderText(/máximo/i);
  // userEvent.type(inputMinimo, 10);
});

//input valor maximo <=
//input filtro por nome insensitivity
// valor primeiro item
// total carrinho concatenado
// não limpa carrinho ao finalizar
// desativar botão finalizar compra se carrinho estiver vazio

//ao clicar em cancelar no botão de digitar email
