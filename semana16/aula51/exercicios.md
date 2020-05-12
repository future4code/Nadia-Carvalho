####Exercicio 1
a) Remove a coluna Salary.
b) Altera o nome da coluna para 'sex' e admite até 6 caracteres.
c) Altera o nome da coluna para 'gender' e admite até 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

####Exercicio 2
a)
UPDATE Actor
SET name = 'Moacyr Franco', birth_date = '1936-10-05' WHERE id = '003';
b)
UPDATE Actor
SET name = 'Juliana Pães' WHERE name = 'Juliana Paes'; 
// Não consegui fazer a atualização de fato por causa do safe mode. No entanto, a resposta que eu escrevi bate com a que está em 'Dicas', Error Code: 1175.//
c)
UPDATE Actor
SET name = 'Moacyr Franco', birth_date = '1936-10-05',
 gender = 'male', salary = 600000 WHERE id = '003';
d)
UPDATE Actor
SET place_of_birth = "São Paulo"
WHERE id = "123";
Error Code: 1054. Unknown column 'place_of_birth' in 'field list'
O erro acontece porque a referencia de coluna não existe, portanto não pode ser atualizada.

####Exercicio 3
a)DELETE FROM Actor WHERE name = "Fernanda Montenegro"
// Não consegui fazer a atualização de fato por causa do safe mode. No entanto, a resposta que eu escrevi bate com a que está em 'Dicas', Error Code: 1175.//
b)DELETE FROM Actor WHERE (gender = "male") AND salary > 1000000;
// Não consegui fazer a atualização de fato por causa do safe mode. No entanto, a resposta que eu escrevi bate com a que está em 'Dicas', Error Code: 1175.//

####Exercicio 4
a)SELECT MAX(salary) FROM Actor;
b)SELECT MAX(salary) FROM Actor WHERE gender = "female";
c)SELECT COUNT(*) FROM Actor WHERE gender = "female";
d)SELECT SUM(salary) FROM Actor;

####Exercicio 5
a)A query agrupa os atores da tabela por gênero e conta quantos membros tem em cada grupo.
b)
SELECT id, name FROM Actor
ORDER BY name DESC;
c)
SELECT * FROM Actor
ORDER BY salary;
d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

####Exercicio 6
a)ALTER TABLE Movie ADD playing_limit_date DATE; 
b)ALTER TABLE Movie CHANGE rating rating FLOAT;
c)
UPDATE Movie
SET playing_limit_date = '2020-06-01' WHERE id = '003';
d)
UPDATE Movie
SET playing_limit_date = '2020-01-01' WHERE id = '001';
e)
UPDATE Movie
SET synopsis = 'teste' WHERE id = '002';
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
//Acho que eu fiz alguma coisa errada aqui, ein?! rs//

####Exercicio 7
a)
SELECT COUNT(*) FROM Movie 
WHERE rating  > 7.5;
b)
SELECT AVG(rating) FROM Movie;
c)
SELECT COUNT(*) FROM Movie 
WHERE playing_limit_date > '2020-05-07'; //&& CURDATE();//
d)
SELECT COUNT(*) FROM Movie 
WHERE release_date < '2020-05-07'; //&& CURDATE();//
e)SELECT MAX(rating) FROM Movie;
f)SELECT MIN(rating) FROM Movie;

####Exercicio 8
a)
SELECT * FROM Movie
ORDER BY title;
b)
SELECT * FROM Movie 
ORDER BY title LIMIT 5;
c)
SELECT * FROM Movie 
WHERE release_date < '2020-05-07'; //&& CURDATE();//
ORDER BY release_date DESC 
LIMIT 3;
d)
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;