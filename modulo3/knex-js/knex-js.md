# KNEX-JS

## Exercicio 1

**a)** Com o raw o resultado é um array com todas as informações da tabela.

**b)**

```js
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result;
};
```

**c)**

```js
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0];
  return count;
};
```

## Exercicio 2

**a)** Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

```ts
const updateActor;
```

**b)** Uma função que receba um id e delete um ator da tabela

```js
const deleteActor = async (id: string): Promise<void> => {
  await connection('Actor').delete().where('id', id);
};
```

**c)** Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

```js
const avgActor = async (gender: string): Promise<any> => {
  const result = await connection('Actor')
    .avg('salary as media')
    .where({ gender });
  return result[0];
};
```

## Exercicio 3

**a)**

```js
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)
    res.status(200)send(actor)
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})
```

**b)**

```js
app.get('/actor', async (req: Request, res: Response) => {
  const gender: any = req.query.gender;
  try {
    const countByGender = await countActors(gender);
    res.status(200).send(countByGender);
  } catch (error) {
    res.status(500).send('Unexpected error');
  }
});
```

## Exercicio 4

**a)**

```js
app.put('/actor/:id', async (req: Request, res: Response)=>{
  const id = req.params.id
  const updateSalary = (req.body.salary)
  try {
    updateActor(id, updateSalary)
    res.status(200).send("Salario atualizado com sucesso")
  } catch (error: any) {
    res.status(500).send(error.message)
  }
})
```

**b)**

```js
app.delete('/actor/:id', async (req: Request, res: Response)=>{
  const id = req.params.id
  try {
    deleteActor(id)
    res.status(200).send("Ator deletado com sucesso")
  } catch (error: any) {
    res.status(500).send(error.message)
  }
})
```
