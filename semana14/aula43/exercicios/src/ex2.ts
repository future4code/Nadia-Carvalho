// Faça uma função que receba um array de números e retorne um objeto que tenha as seguintes informações: 
// a quantidade de números que há no array, a quantidade de números ímpares no array e a soma de todos os 
// elementos do array.

function arraySize(size: number[]): number {
  return size.length;
}
function evenOrOdd(odd: number[]): number {
  return odd.filter((number) => {
    return number % 2 === 1;
  }).length
}
function sumArray(add: number[]): number {
  return add.reduce((prev, current) => {
    return prev + current;
  }, 0);
}

type arrayInfo = {
 size: number;
 countOdd: number;
 sum: number;
}
function ex2(reference:number[]): arrayInfo {

  const info = {
    size: arraySize(reference),
    countOdd: evenOrOdd(reference),
    sum: sumArray(reference)
  }
  console.log(info);
  return info;
}

ex2([12, 85,456, 7412])