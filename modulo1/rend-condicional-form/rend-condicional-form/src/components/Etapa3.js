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

const Etapa3 = () => {
  return (
    <Box>
      <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
      <Form>
        <InputLabel>
          5. Por que você não terminou um curso de graduação?
          <input type="text" id="justificativa" />
        </InputLabel>

        <InputLabel>
          6. Você fez algum curso complementar?
          <input type="text" id="curso complementar" />
        </InputLabel>

        <select name="escolaridade">
          <option value="Nenhum">Nenhum</option>
          <option value="Curso Técnico" selected>
            Curso Técnico
          </option>
          <option value="Curso Inglês">Curso Inglês</option>
        </select>
      </Form>
    </Box>
  );
};

export { Etapa3 };
