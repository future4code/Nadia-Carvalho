####Exercicio 1
a)VARCHAR: determina que o resultado deve ser uma string 
  DATE: determina que o resultado deve ser uma data
b)
  SHOW DATABASES;
    'information_schema'
    'sagan_nadia_db'
    esses são os banco de dados disponíveis.

  SHOW TABLES;
   'Actor'  
   essa é a tabela existente.
c) Ocorre um erro 1064. Consegui exibir os dados com o comando DESCRIBE Actor.
####Exercicio 2
a)
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
     "002", 
     "Glória Pires",
      1200000,
     "1963-08-23", 
     "female"
    );
b)
"Código do erro: 1062. Entrada duplicada '002' para chave 'PRIMÁRIA'." Não é possível fazer uma entrada com
um ID existente.
c)"Código do erro: 1136. Contagem de colunas não é igual a contagem na linha 1". Não é possível fazer uma entrada
  com menos values do que colunas.
d)"Código do erro: 1364. Campo 'name' não tem um valor padrão." Sem um valor padrão, não é possível fazer a entrada sem inserir um valor para o campo 'name'.
e)"Código do erro: 1292. Valor incorreto para data:'1950' para a coluna 'birth_date' na linha 1" Não é possível fazer a entrada sem usar o modelo de data padrão AAAA-MM-DD
f)Usei o modelo do 'dicas'.

####Exercicio 3
a)SELECT * from Actor WHERE gender = "female";
b)SELECT salary from Actor WHERE name = "Tony Ramos";
c)SELECT *from Actor WHERE gender = "invalid"; - Não retornou nenhuma linha, pois nenhuma das entradas
tem o 'gender' definido dessa forma.
d)SELECT id, name, salary from Actor WHERE salary <= 500000;
e)corrigida: SELECT id, name from Actor WHERE id = "002";
####Exercicio 4
a)A query pede que sejam feitas as seguintes verificações para exibição de resultado, nessa ordem: nomes que comecem com A ou J e que tenham o salário maior que 500000.
b)
  SELECT * FROM Actor
  WHERE (name NOT LIKE "A%") AND salary > 350000;
c)
  SELECT * FROM Actor
  WHERE name LIKE "%g%" OR name LIKE "%G%";
d)
  SELECT * FROM Actor
  WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
####Exercicio 5
a) 
  <!-- CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
  ); -->
A query cria uma tabela 'Movie', com um ID em formato string que é uma primary key, um TITLE que é uma string e não pode ser nulo nem se repetir, uma SYNOPSIS que é um texto e não pode ser nulo, uma RELEASE_DATE que é uma data e não pode ser nula, e um RATING que é um número inteiro e não pode ser nulo.

b)c)d)
INSERT into Movie(id, title, synopsis, release_date, rating)
VALUES(); - Usei os dados do notion.

e)
INSERT into Movie(id, title, synopsis, release_date, rating)
VALUES(
"001",
"O Auto da Compadecida", 
"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
 "2000-09-10", 
 9
 );

####Exercicio 6
a)SELECT id, title, rating from Movie WHERE id = "001";
b)SELECT * from Movie WHERE title = "Deus é brasileiro";
c)SELECT id, title, synopsis from Movie WHERE rating > 7;

####Exercicio 7
a)SELECT * from Movie WHERE title LIKE "%Auto%"; (retorna O Auto da Compadecida)
b)SELECT * from Movie WHERE title LIKE "%casad%" OR synopsis LIKE "%casad%"; (retorna Se eu fosse voce e Dona Flor e seus dois maridos)
c)SELECT * from Movie WHERE release_date < "2020-05-07";
d)
SELECT * from Movie WHERE(release_date < "2020-05-07" // < CURDATE() //)AND
(title LIKE "%casad%" OR synopsis LIKE "%casad%") AND
 rating > 7;