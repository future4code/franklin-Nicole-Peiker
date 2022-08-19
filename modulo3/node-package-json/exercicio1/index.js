//Exercicio 1

// para acessar os parametros passados na linha de codigo para o node utilizamos o process.argv[indice do paramentro desejado]. Por ex. se na linha de comando é digitado 'node nomedoarquivo cadeira' o primeiro argumento é node, o segundo o arquivo executado e a partir do terceiro argumento pode ser o valor que desejar.

const nome = process.argv[2];
const idade = process.argv[3];

const result = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${
  Number(idade) + 7
}`;

if (process.argv[3] === undefined) {
  console.log('Esperava 2 parâmetros só recebi um.');
} else {
  console.log(result);
}
