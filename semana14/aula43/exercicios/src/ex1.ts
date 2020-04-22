enum Operations {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  BIGGEST = 'biggest'
}
function add(num1: number, num2: number): number {
  const sum: number = (num1 + num2);
  console.log(sum);
  return sum;
}

function subtract(num1: number, num2: number): number {
  const sub: number = (num1 - num2);
  console.log(sub);
  return sub;
}

function multiply(num1: number, num2: number): number {
  const mul: number = (num1 * num2);
  console.log(mul);
  return mul;
}
function biggest(num1: number, num2: number): number {
  const big: number = (num1 >= num2 ? num1 : num2);
  console.log(big);
  return big;
}

function ex1(operation: Operations, num1: number, num2: number): number {
  switch (operation) {
    case Operations.ADD:
      return add(num1, num2);

    case Operations.SUBTRACT:
      return subtract(num1, num2);

    case Operations.MULTIPLY:
      return multiply(num1, num2);

    case Operations.BIGGEST:
      return biggest(num1, num2);
  }
}

ex1(Operations.ADD, 1123, 4423)
ex1(Operations.SUBTRACT, 1563, 4983)
ex1(Operations.MULTIPLY, 8574, 5874)
ex1(Operations.BIGGEST, 4478, 5521)