## Exercício 1

**a)**

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

O comando drop deleta a coluna salario.
**b)**

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

O comando change renomeia gender para sex.
**c)**

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

A querie altera a quantidade de caracteres na coluna gender.
**d)**

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100) NOT NULL
```

## Exercício 2

**a)**

```sql
UPDATE Actor SET birth_date = "1929-09-10" WHERE id="003"
```

**b)**

```sql
UPDATE Actor SET name = "JULIANA PAES" where name = "Juliana Paes"
```

**c)**

```sql
UPDATE Actor SET
name = "Selton Mello",
salary= 200000,
birth_date= "1972-12-30",
gender= "male",
hometown= "Passos"
where id=005
```

**d)**

```sql
UPDATE Actor SET gender= "male" WHERE id="008"
```

0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
Não exibe erro, mas não atualiza nada pois não encontra o id indicado.

## Exercício 3

**a)**

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

**b)**

```sql
DELETE FROM Actor WHERE gender = "male" AND salary> 1000000
```

## Exercício 4

**a)**

```sql
SELECT MAX(salary) FROM Actor
```

**b)**

```sql
SELECT MIN(salary) FROM Actor WHERE gender="female"
```

**c)**

```sql
SELECT COUNT(*) FROM Actor WHERE gender="female"
```

**d)**

```sql
SELECT SUM(salary) FROM Actor
```

## Exercício 5

**a)**

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

A query retorna a quantidade total de atores agrupadas sendo um genero em cada linha

**b)**

```sql
SELECT id, name FROM Actor ORDER BY name DESC
```

**c)**

```sql
SELECT * FROM Actor ORDER BY salary ASC
```

**d)**

```sql
SELECT * FROM Actor WHERE gender= "male" ORDER BY salary DESC LIMIT 3
```

**e)**

```sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender
```

## Exercício 6

**a)**

```sql
ALTER TABLE movies ADD playing_limit_date DATE
```

**b)**

```sql
ALTER TABLE movies CHANGE rating rating FLOAT NOT NULL
```

**c)**

```sql
UPDATE movies SET playing_limit_date = "2022-08-01" WHERE id=001;

UPDATE movies SET playing_limit_date = "2022-10-01" WHERE id=003;
```

**d)**

```sql
DELETE FROM movies WHERE id=2

UPDATE movies SET synopsis="blablabla" WHERE id=2
```

0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0
