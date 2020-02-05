/* Exercício 1
a)[]
b)(6) [0, 1, 0, 1, 2, 3]
c)(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
*/

/* Exercício 2
a) 0, 2, undefined
b)Sim. A função depende de o item buscado estar dentro do array ou não, e independe do tipo de array.
*/
/* Exercício 3
A função multiplica ou adiciona os itens do array, dependendo do método (A ou B).
Um melhor nome seria addOrMultiply
*/
/* Exercício 4 */

// a)
function dogyears(year) {
   return year * 7 
}

// b) 
function personalData(name, age, address, isStudent) {
  let message = "Eu sou " + name + ", tenho " + age + " anos, moro em " + address + " e "
  if (isStudent) {
    message += "sou"
  } else {
    message += "não sou"
  }
  message += " estudante"
  return message
}

// Exercício 5
function seculo(ano) {
  if (ano < 1000 || ano > 2020) return ""
  let seculo = Math.floor(ano / 100)
  if (ano % 100 > 0) seculo++
  let romanos = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  let sec1 = Math.floor(seculo / 10)
  let sec2 = seculo % 10
  let msg = "o ano "+ ano + " pertence ao século "
  for (let i = 0; i < sec1; i++) {
    msg += "X"
  }
  msg += romanos[sec2]
  return msg
}
// Exercício 6
//a)
function arrayLength(array){
  return array.length
}
//b)
function parImpar (numero){
return (numero % 2 === 0)
}
//c)
function contaPar(array){
let totalPar = 0
for (const itemArray of array) {
  if (itemArray % 2 === 0) {
    totalPar++
  }
}
return totalPar
}
//d)
function contaPar2(array){
  let totalPar = 0
  for (const itemArray of array) {
    if (parImpar(itemArray)) {
      totalPar++
    }
  }
  return totalPar
  }
