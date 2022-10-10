import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Select from './Select';

describe('Testing Select component', () => {
  test('Testing requisition lottery', () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          id: 0,
          nome: 'mega-sena'
        },
        {
          id: 1,
          nome: 'quina'
        },
        {
          id: 2,
          nome: 'lotofácil'
        },
        {
          id: 3,
          nome: 'lotomania'
        },
        {
          id: 4,
          nome: 'timemania'
        },
        {
          id: 5,
          nome: 'dia de sorte'
        }
      ]
    });

    render(<Select />);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://brainn-api-loterias.herokuapp.com/api/v1/loterias'
    );
  });
});
