###Exercício 1

a) Acho que o uso de string aumentam as possibilidades de uso. Podemos adicionar carateres especiais, letras, números, zeros para iniciar. Foto

b)

```ts
export const generateId = () => {
  return v4();
};
```

###Exercício 2

a) Primeiro é criado uma variavel com o nome da tabela que no caso é user. Depois é feita a conexão com o banco de dados. Depois é feito uma função que recebe um id, email e password e cria um novo usuário na tabela User.

b)

```sql
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)

```ts
export const createUser = async (req: Request, res: Response) => {
  try {
    const { id, email, password } = req.body;
    await connection('User').insert({ id, email, password }).into('User');

    res.status(200).send('Usuário criado com sucesso');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
```

###Exercício 3
a) Converte para uma string caso não seja.

b)

```ts
export default class Authenticator {
  generateToken = (payload: authenticationData) => {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: '1min'
    });
  };

  getTokenData = (token: string) => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string);

    return tokenData;
  };
}
export type authenticationData = {
  id: string;
};
```

###Exercício 4
a)

```ts
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Email ou senha incorreto.');
    }
    const id = generateId();
    await connection('User').insert({ id, email, password }).into('User');

    const token = generateToken(id);
    res.status(200).send(token);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
```

b)

```ts
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Email ou senha incorreto.');
    } else if (email.includes('@') === false) {
      throw new Error('O email esta incorreto.');
    } else {
      const id = generateId();
      await connection('User').insert({ id, email, password }).into('User');

      const token = generateToken(id);
      res.status(200).send(token);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
```

c)

```ts
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('Email ou senha incorreto.');
    } else if (email.includes('@') === false) {
      throw new Error('O email esta incorreto.');
    } else if (password.length < 6) {
      throw new Error('Sua senha deve possuir no mínimo 6 caracteres.');
    } else {
      const id = generateId();
      await connection('User').insert({ id, email, password }).into('User');

      const token = generateToken(id);
      res.status(200).send(token);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
```

###Exercício 5

```ts
export const getUserByEmail = async (email: string): Promise<any> => {
  const result = await connection.select().from('User').where({ email });

  return result[0];
};
```

###Exercício 6

```ts
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || email.includes('@') === false) {
      throw new Error('O email esta incorreto');
    }
    const user = await getUserByEmail(email);
    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    const token = generateToken(user.id);
    res.status(200).send({ token });
  } catch (error: any) {
    res.status(400).send({
      message: error.message
    });
  }
};
```
