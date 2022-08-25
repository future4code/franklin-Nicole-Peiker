# KNEX-sql

## Exercicio 1

**a)** Chave estrangeira é um identificador que vem de outra tabela com a qual ela se relaciona

**b)**

```sql
create table Rating (
id varchar (255) primary key,
comment text not null,
rate float not null,
movie_id varchar(255),
foreign key (movie_id) references movies(id)
)
```

```sql
insert into Rating values ("001", "Otimo filme", 10, 4)

insert into Rating values ("002", "Filme é legal, mas é mais do mesmo", 7, 3)
```

**c)**
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`franklin-nicole-peiker`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))

```sql
insert into Rating values ("002", "Filme é fantástico", 7, 3)
```

Como a chave estrangeira não foi encontrada não é possível adicionar ou atualizar.

**d)**

```sql
ALTER TABLE movies DROP COLUMN rating
```

**e)**

```sql
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`franklin-nicole-peiker`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))
```

Não é possível deletar um filme que tenha avaliações. Para fazer isso é necessário primeiro deletar as avaliações e somente depois deletar o "pai" que no caso é o filme.

## Exercicio 2

**a)**

```sql
create table MovieCast (
movie_id varchar(255),
actor_id varchar(255),
foreign key (movie_id) references movies(id),
foreign key (actor_id) references Actor(id)
)
```

A coluna movie_id faz referencia a coluna id da tabela movies e possue o mesmo valor. A coluna actor_id faz referencia a coluna id da tabela Actor e possue o mesmo valor.

**b)**

```sql
insert into MovieCast (movie_id, actor_id) values ("4", "005"), ("4", "001"), ("4", "004"),
("3", "005"), ("3", "007"), ("2", "008")
```

**c)**

```sql
insert into MovieCast (movie_id, actor_id) values ("4", "010")
```

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`franklin-nicole-peiker`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não é possível criar uma relação onde um dos elementos não existe.

**d)**

```sql
delete from movies where id=4
```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`franklin-nicole-peiker`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`))

Não é possível deletar um ator que tenha relação com um filme. Para fazer isso é necessário primeiro deletar o filme.

## Exercicio 3

**a)**

```sql
SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

O **On** é usado na relação entre tabelas e indica a coluna que faz referencia com a coluna da outra tabela. No caso a coluna id em movies faz referncia com a coluna movie_id da tabela rating.

**b)**

```sql
select movies.name, movies.id, Rating.rate from movies join Rating on movies.id = Rating.movie_id
```

## Exercicio 4

**a)**

```sql
SELECT movies.id, movies.name, Rating.rate, Rating.comment FROM movies LEFT JOIN Rating ON movies.id = Rating.movie_id;
```

**b)**

```sql
select movies.id, movies.name, MovieCast.actor_id from movies right join MovieCast on MovieCast.movie_id = movies.id
```

**c)**

```sql
select movies.name, avg(Rating.rate) from movies left join Rating on Rating.movie_id = movies.id group by movies.name
```

## Exercicio 5

**a)**

```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

Pois as tabelas movies e actor não tem relação entre elas, mas ambas tem relação com a tabela MovieCast então primeiro ele relaciona movies com MovieCast e depois relaciona Actor com MovieCast.

**b)**

```sql
select movies.id as movies_id, movies.name as movies_name, Actor.id as actor_id, Actor.name as actor_name from movies
join MovieCast on movies.id = MovieCast.movie_id
join Actor on Actor.id = MovieCast.Actor_id
```

**c)**

```sql
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

Error Code: 1054. Unknown column 'm' in 'field list'

Como tem uma virgula depois do m, ele interpretou como se fosse uma das colunas e não existe nenhuma coluna com o nome "m".

**d)**

```sql
select movies.name as movie, Actor.name as actor, Rating.comment as comment, Rating.rate as rate from movies
join MovieCast on movies.id = MovieCast.movie_id
join Actor on Actor.id = MovieCast.actor_id
join Rating on movies.id = Rating.movie_id
```
