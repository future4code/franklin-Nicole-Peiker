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

const Etapa1 = () => {
  return (
    <Box>
      <h2>ETAPA 1 - DADOS GERAIS</h2>
      <Form>
        <InputLabel>
          1. Qual o seu nome?
          <input type="text" id="nome" />
        </InputLabel>

        <InputLabel>
          2. Qual sua idade? <input type="text" id="idade" />
        </InputLabel>

        <InputLabel>
          3. Qual seu email?
          <input type="text" id="email" />
        </InputLabel>

        <select name="escolaridade">
          <option value="Ensino médio incompleto">
            Ensino médio incompleto
          </option>
          <option value="Ensino médio completo" selected>
            Ensino médio completo
          </option>
          <option value="Ensino superior incompleto">
            Ensino superior incompleto
          </option>
          <option value="Ensino superior completo">
            Ensino superior completo
          </option>
        </select>
      </Form>
    </Box>
  );
};

export { Etapa1 };
