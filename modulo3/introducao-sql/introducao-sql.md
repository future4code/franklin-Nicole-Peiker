# INTRODUÇÃO AO SQL

## Exercicio 1

**a)**
CREATE TABLE Actor - <em>cria uma tabela com nome ator</em>
<br>
id VARCHAR(255) PRIMARY KEY - <em>determina que o id é uma string de no máximo 255 caracteres e a primary key é um identificador único para cada tabela que serve de referencia para criar relacionamentos entre as tabelas.</em>
<br>
name VARCHAR (255) NOT NULL - <em>name é uma string de no máximo 255 caracteres e não pode ser nulo.</em>
<br>
salary FLOAT NOT NULL - <em>o salary é um numero não inteiro e não pode ser nulo.</em>
<br>
birth_date DATE NOT NULL - <em>o birthdate é uma data e o campo não pode ser nulo.</em>
<br>
gender VARCHAR (6) NOT NULL - <em>gender é uma string de no máximo 6 caracteres e não pode ser nulo.</em>

**b)**
SHOW DATABASES -<em> mostra todos os bancos de dados de dados </em>
SHOW TABLES - <em> mostra todas as tabelas cadastradas </em>

**c)**
DESCRIBE -<em> mostra informações sobre a tabela, o tipo dos campos </em>

## Exercicio 2

**a)**

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Gloria Pires",
    1200000,
    "1963-08-25",
    "female"
)
```

**b)**
Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'

O erro ocorre pois não é possível repetir a praimary key, ela deve ser unica.

**c)**
Error Code: 1136. Column count doesn't match value count at row 1.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
```

O erro ocorre pois a quantidade de valores é maior que a de colunas.

**d)**
Error Code: 1364. Field 'name' doesn't have a default value

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antonio Fagundes",
400000,
"1949-04-18",
"male"
);
```

O erro ocorre pois o nome deve ser passado e não existe um valor padrão caso ele não seja informado.

**e)**

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);
```

O erro ocorre pois a data deve ser informada entre aspas.

## Exercicio 3

**a)**
SELECT \* FROM Actor WHERE gender = "female"

**b)**
SELECT salary FROM Actor WHERE name = "Tony Ramos"

**c)**
SELECT \* FROM Actor WHERE gender = "invalid"

**d)**
SELECT id, name, salary FROM Actor WHERE salary <= 500000

**e)**
SELECT id, nome from Actor WHERE id = "002"

Error Code: 1054. Unknown column 'nome' in 'field list'.
O erro ocorre pois a coluna nome não existe.
<br>

## Exercicio 4

**a)**

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

Seleciona todos os dados da tabela ator onde o nome começa pela letra A ou J e o salario é suyperior a 300.000

**b)**

```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

**c)**

```sql
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
```

**d)**

```sql
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000
```

## Exercicio 5

**a)**

```sql
CREATE TABLE Filmes (
 id VARCHAR(255) PRIMARY KEY,
 nome VARCHAR (255) NOT NULL,
 sinopse TEXT NOT NULL,
 data_lancamento DATE,
 avaliacao INT NOT NULL
 )
```

**b)**

```sql
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
 001,
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
 "2016-01-06",
 7
)
```

**c)**

```sql
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
002,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
)
```

**d)**

```sql
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
003,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
)

```

**e)**

```sql
INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao)
VALUES (
004,
"O auto da compadecida",
"As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba. A salvação da dupla acontece com a aparição da Nossa Senhora. ",
"2000-09-10",
10
)
```

## Exercicio 6

**a)**

```sql
SELECT id, nome, avaliacao FROM Filmes WHERE id=001
```

**b)**

```sql
SELECT * FROM Filmes WHERE nome = "O auto da compadecida"
```

**c)**

```sql
SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7
```

## Exercicio 7

**a)**

```sql
SELECT * FROM Filmes WHERE nome LIKE "%vida%"
```

**b)**

```sql
SELECT * FROM Filmes WHERE nome LIKE "%de%" OR sinopse LIKE "%de%"
```

**c)**

```sql
SELECT * FROM Filmes
```

**d)**

```sql
SELECT * FROM Filmes WHERE nome LIKE "%de%" OR sinopse LIKE "%de%" AND avaliacao > 7
```
