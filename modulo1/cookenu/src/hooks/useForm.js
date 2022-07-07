import { useState } from 'react';

//recebe um estado incial que é um objeto com os campo
const useForm = initialState => {
  const [form, setForm] = useState(initialState);

  //unico handle
  const handleInputChange = event => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  // limpa os campos, volta pro estado incial
  const clear = () => {
    setForm(initialState);
  };

  return [form, handleInputChange, clear];
};

export { useForm };
