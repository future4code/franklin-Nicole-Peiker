//Exercicio 2

const operacao = process.argv[2];
const numero1 = process.argv[3];
const numero2 = process.argv[4];

switch (operacao) {
  case 'soma':
    resultado = Number(numero1) + Number(numero2);
    break;
  case 'subtrai':
    resultado = Number(numero1) - Number(numero2);
    break;
  case 'divide':
    resultado = Number(numero1) / Number(numero2);
    break;
  case 'multiplica':
    resultado = Number(numero1) * Number(numero2);
    break;
}

if (operacao === undefined || numero1 === undefined || numero2 === undefined) {
  console.log('Por favor insira os 3 parametros');
} else if (
  operacao !== 'soma' &&
  operacao !== 'subtrai' &&
  operacao !== 'divide' &&
  operacao !== 'multiplica'
) {
  console.log(
    'O primeiro argumento deve ser: soma, subtrai, divide ou multiplica'
  );
} else if (
  typeof Number(numero1) !== 'number' ||
  typeof Number(numero2) !== 'number'
) {
  console.log('O segundo e o terceiro argumento devem ser um numero inteiro');
} else {
  console.log(resultado);
}
