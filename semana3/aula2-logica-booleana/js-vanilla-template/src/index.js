/* Exercício 1:
a.  false
b.  false
c.  true
d.  false
e.  boolean
*/

/* Exercício 2:
a)  Arrays são maneiras de se guardar e acessar mais de uma informação ao mesmo tempo. 
    Declaramos uma array no JS com "[ ]"

b)  0.

c)  array.length

d) 
  I.  undefined
  II.  null
  III.  11
  IV.  3  e  4
  V.  19  e  9
  VI.  3
  VII.  1
*/

/* Exercício 1 */

let kelvin;
let fahreinheit;
let celsius;

fahreinheit = 77;
kelvin = (fahreinheit-32)*5/9 + 273.15;
console.log('a)', fahreinheit + '°F = ' + kelvin + 'K')
// a) 77°F = 298.15K

celsius = 80;
fahreinheit = celsius*9/5 + 32;
console.log('b)', celsius + '°C = ' + fahreinheit + '°F')
// b) 80°C = 176°F

celsius = 30;
fahreinheit = celsius*9/5 + 32;
console.log('c-1)', celsius + '°C = ' + fahreinheit + '°F')
// c-1) 30°C = 86°F
kelvin = (fahreinheit-32)*5/9 + 273.15;
console.log('c-2)', celsius + '°C = ' + kelvin + 'K')
// c-2) 30°C = 303.15K

celsius = prompt("Insira o valor em °C aqui");
fahreinheit = celsius*9/5 + 32;
console.log('d-1)', celsius + '°C = ' + fahreinheit + '°F')
kelvin = (fahreinheit-32)*5/9 + 273.15;
console.log('d-2)', celsius + '°C = ' + kelvin + 'K')
// d)


/* Exercício 2 */

let pergunta;
let resposta;

// Pergunta 1
pergunta = "Qual o seu nome?";
resposta = prompt(pergunta);
console.log("1.", pergunta);
console.log("Resposta:", resposta);

// Pergunta 2
pergunta = "Qual sua idade?";
resposta = prompt(pergunta);
console.log("2.", pergunta);
console.log("Resposta:", resposta);

// Pergunta 3
pergunta = "Qual a sua profissão?";
resposta = prompt(pergunta);
console.log("3.", pergunta);
console.log("Resposta:", resposta);

// Pergunta 4
pergunta = "Se você fosse um bicho, qual seria?";
resposta = prompt(pergunta);
console.log("4.", pergunta);
console.log("Resposta:", resposta);

// Pergunta 5
pergunta = "E qual bicho você nunca gostaria de ser?";
resposta = prompt(pergunta);
console.log("5.", pergunta);
console.log("Resposta:", resposta);

/* Exercício 3 */

const quilowattHora = 0.05;
let consumo;
let gasto;

consumo = 280;
gasto = consumo*quilowattHora;
console.log("a)", "Seu gasto foi de R$" + gasto)
// a) Seu gasto foi de R$14

const percentDesconto = 15;
const desconto = gasto*(percentDesconto/100);
gasto = gasto - desconto;
console.log("b)", "Seu gasto com desconto foi de R$" + gasto)
// b) Seu gasto com desconto foi de R$11.9