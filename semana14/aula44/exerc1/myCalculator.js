// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.🌚


const operation = process.argv[2];
const num1= Number(process.argv[3]);
const num2= Number(process.argv[4]);

function add(num1, num2) {
  const sum = (num1 + num2);
  return sum;
}
function sub(num1, num2) {
  const subtract = (num1 - num2);
  return subtract;
}
function mul(num1, num2) {
  const multiply = (num1 * num2);
  return multiply;
}
function div(num1, num2) {
  const divide = (num1 / num2);
  return divide;
}

function myCalculator(operation, num1, num2) {
  switch (operation) {
      case 'add':
          return add(num1, num2);
      case 'sub':
          return sub(num1, num2);
      case 'mul' :
          return mul(num1, num2);
      case 'div':
          return div(num1, num2);
  }
}

console.log(myCalculator(operation, num1, num2))