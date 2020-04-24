// Faça uma função que receba um array de números e retorne um objeto que tenha as seguintes informações: 
// a quantidade de números que há no array, a quantidade de números ímpares no array e a soma de todos os 
// elementos do array.
function arraySize(size) {
    return size.length;
}
function evenOrOdd(odd) {
    return odd.filter(function (number) {
        return number % 2 === 1;
    }).length;
}
function sumArray(add) {
    return add.reduce(function (prev, current) {
        return prev + current;
    }, 0);
}
function ex2(reference) {
    var info = {
        size: arraySize(reference),
        countOdd: evenOrOdd(reference),
        sum: sumArray(reference)
    };
    console.log(info);
    return info;
}
ex2([12, 85, 456, 7412]);
