/* Exercício 1
O código executa uma soma, que deve progredir de 0 até o valor de i ser igual a 14. a equação adiciona a soma anterior (inicialL
  ao valor de i. O valor final é 105.
*/

/* Exercício 2
a) O comando push adiciona um número qualquer de dentro da primeira array, desde que ele obedeça à condição de ser divisível por 5.
b)(4) [10, 15, 25, 30]
c)(6) [12, 15, 18, 21, 27, 30]. (1) [12] 
*/

/* Exercício 3 */
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray

//a)
let maiorNumero = array[0]
let menorNumero = array[0]

for (const itemArray of array) {
  if (itemArray >= maiorNumero) {
    maiorNumero = itemArray
  }
  if (itemArray <= menorNumero) {
    menorNumero = itemArray
  }
}

// Resposta A.
console.log("Resposta A.", "O maior número é " + maiorNumero + " e o menor é " + menorNumero)

//b)
novoArray = []
for (const itemArray of array) {
  novoArray.push(itemArray / 10)
}
// Resposta B.
console.log("Resposta B.", novoArray)

//c)
novoArray = []
for (const itemArray of array) {
  if (itemArray % 2 === 0) {
    novoArray.push(itemArray)
  }
}
// Resposta C.
console.log("Resposta C.", novoArray)

//d)
novoArray = []
for (let index = 0; index < array.length; index++) {
  novoArray.push("O elemento do índex " + index + " é " + array[index])
}
// Resposta D.
console.log("Resposta D.", novoArray)

/* */

