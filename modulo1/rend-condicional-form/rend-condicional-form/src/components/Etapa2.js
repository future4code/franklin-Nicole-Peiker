import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Etapa2 = () => {
  return (
    <Box>
      <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
      <Form>
        <InputLabel>
          5. Qual curso?
          <input type="text" id="curso" />
        </InputLabel>

        <InputLabel>
          6. Qual a unidade de ensino? <input type="text" id="unidade ensino" />
        </InputLabel>
      </Form>
    </Box>
  );
};

export { Etapa2 };
