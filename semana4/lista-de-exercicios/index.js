//INTERPRETAÇÃO DE CÓDIGO
/* Exercício 1
A função converte valores em dólar para valores em real. O usuário deve inserir o valor da cotação
do dólar. A função retornará "R$420", se o usuário inserir como cotação do dólar o valor '4,20', sendo
que o código vai multiplicar qualquer valor, inserido pelo usuário, por 100.
*/

/*Exercício 2 
A função altera o valor inserido dependendo do tipo de investimento. O valor é multiplicado pelo índice do
investimento para retornar um valor mais alto devido à correção. Se for definido um tipo de investimento que
não está presente na função, ela retorna um alerta "TIPO DE INVESTIMENTO INFORMADO INCORRETO". Cada tipo de 
investimento tem um valor de multiplicação diferente para retornar valores diferentes. Os dois console.log 
retornam (em ordem) o valor final de 165, e o alerta acima e 'undefined'.
*/

/*Exercício 3
A função divide um array em dois arrays, um de números pares e outro de ímpares. Há três console.log, que
imprimem (em ordem) a quantidade de números totais, a quantidade de números pares e a quantidade de números
ímpares. A função executa um teste (dividir cada um dos números do array por 2) e se o resultado tiver resto 0,
ele é incluído no array dos números pares. Caso contrário, é incluído no array dos números ímpares.
*/

/*Exercício 4
A função verifica os dados de um array para saber qual o maior e menor número dentro dele. A função percorre
todo o array, verificando cada um dos números para saber se eles são maiores ou menores que os atuais maiores 
ou menores. Os console.log imprimem (em ordem) -10 e 1590.
*/

//LOGICA DE PROGRAMAÇÃO
//Exercício 1
//3 maneiras de percorrer uma lista: com 'for'; 'for... of...'; 'forEach'.
const numeros = [12, 14, 54, 65, 77, 87]
for (let i = 0; i < numeros.length; i++) {
  const elemento = numeros[i]
  console.log(elemento)
}

/*Exercício 2
a) false
b) false
c) true 
d) true 
e) true
*/

/*Exercício 3
  const quantidadeDeNumerosPares
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
      console.log(i*2)
    }

  O código não funciona, porque:
   - não podemos declarar 'const' sem valor; 
   - o laço while é infinito, não há incrementador do 'i';
 */
const quantidadeDeNumerosPares = 4
let pares = 0
let i = 0
while (pares < quantidadeDeNumerosPares) {
  if (i % 2 == 0) {
    console.log(i)
    pares++
  }
  i++
}

//Exercício 4
function classificaTriangulo(a, b, c){
  if(a == b && b == c ){
    return "Equilátero"
  }else if(a == b || a == c || b == c) {
     return "Isósceles"
  } else {
    return "Escaleno"
  }
}

//Exercício 5
function testaNumeros(n1, n2) {
  let maior = n1;
  let menor = n2;
  if (n2 > n1) {
    maior = n2
    menor = n1
  }
  console.log("O maior é: " + maior)
  if (n1 % n2 === 0) {
    console.log(n1 + " é divisível por " + n2)
  } else {
    console.log(n1 + " não é divisível por " + n2)
  }
  if (n2 % n1 === 0) {
    console.log(n2 + " é divisível por " + n1)
  } else {
    console.log(n2 + " não é divisível por " + n1)
  }
  console.log("A diferença entre eles é " + (maior - menor))
}

//FUNÇÕES
//Exercício 1
function segundoMaiorMenor(numeros) {
  let maior = numeros[0];
  let segundoMaior;
  let menor = numeros[0];
  let segundoMenor;
  for (let num of numeros) {
    if (num > maior) {
      maior = num
    }
    if (num < menor) {
      menor = num
    }
  }
  for (let num of numeros) {
    if (num < maior && num > menor) {
       if (segundoMaior == undefined || num > segundoMaior) {
         segundoMaior = num
       }
       if (segundoMenor == undefined || num < segundoMenor) {
         segundoMenor = num
       }
    }
  }
  console.log("Maior", maior)
  console.log("Menor", menor)
  console.log("Segundo Maior", segundoMaior)
  console.log("Segundo Menor", segundoMenor)
}
segundoMaiorMenor([1,3,4,5,6,7,8,11,9,10])

//Exercício 2
const hello = () => {
  alert("Hello Future4") 
}
hello()