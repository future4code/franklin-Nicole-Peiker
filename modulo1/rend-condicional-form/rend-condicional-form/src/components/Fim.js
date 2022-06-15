import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Fim = () => {
  return (
    <Box>
      <h2>O FORMULÁRIO ACABOU</h2>
      <p>Muito obrigado por participar! Entraremos em contato!</p>
    </Box>
  );
};

export { Fim };
