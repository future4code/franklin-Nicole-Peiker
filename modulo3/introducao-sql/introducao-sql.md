# INTRODUÇÃO AO SQL

## Exercicio 1

**a)**
<br>
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
<br>
**b)**
<br>
SHOW DATABASES -<em> mostra todos os bancos de dados de dados </em>
SHOW TABLES - <em> mostra todas as tabelas cadastradas </em>
<br>
**c)**
<br>
DESCRIBE -<em> mostra informações sobre a tabela, o tipo dos campos </em>
<br>
<br>

## Exercicio 2

<br>
**a)**
<br>
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Gloria Pires",
    1200000,
    "1963-08-25",
    "female"
)
<br>
**b)**
<br>
Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'

O erro ocorre pois não é possível repetir a praimary key, ela deve ser unica.

**c)**
<br>
Error Code: 1136. Column count doesn't match value count at row 1.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

O erro ocorre pois a quantidade de valores é maior que a de colunas.

**d)**
<br>
Error Code: 1364. Field 'name' doesn't have a default value

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"004",
"Antonio Fagundes",
400000,
"1949-04-18",
"male"
);

O erro ocorre pois o nome deve ser passado e não existe um valor padrão caso ele não seja informado.

**e)**
<br>
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

O erro ocorre pois a data deve ser informada entre aspas.

## Exercicio 3

<br>
**a)**
<br>
SELECT * FROM Actor WHERE gender = "female"
<br>
**b)**
<br>
SELECT salary FROM Actor WHERE name = "Tony Ramos"
<br>
**c)**
<br>
SELECT * FROM Actor WHERE gender = "invalid"
**d)**
<br>
SELECT id, name, salary FROM Actor WHERE salary <= 500000
<br>
**e)**
<br>
Error Code: 1054. Unknown column 'nome' in 'field list'.
O erro ocorre pois a coluna nome não existe.
<br>
