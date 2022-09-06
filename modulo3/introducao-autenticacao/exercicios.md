###Exercício 1

a) Acho que o uso de string aumentam as possibilidades de uso. Podemos adicionar carateres especiais, letras, números, zeros para iniciar. Foto

b)

```ts
import { v4 } from 'uuid';

export class IdGenerator {
  public generateId = () => {
    return v4();
  };
}
```

###Exercício 2

a)

b)

```sql
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c)

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
```

###Exercício 4

###Exercício 5

###Exercício 6
