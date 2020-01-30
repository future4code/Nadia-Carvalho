/* 
-----------------------------------------------------
Exercício 1
-----------------------------------------------------

a) Testa a resposta do usuário verificando se o número é par ou não.
b) Testa o módulo do número por dois, ou seja, testa o resto da divisão do número por dois verificando
  se o resultado é igual a zero.  
c) Imprime "Passou no teste" para números pares.
d) Imprime "Não passou no teste" para strings ou números ímpares.

-----------------------------------------------------
Exercício 2
-----------------------------------------------------

a) O código retorna o preço das frutas que o usuário preenche.
b) Irá imprimir: "O preço da fruta Maçã é R$ 2.25"
c) Irei pagar R$ 24,55 (2x3,5+2,25+3x5+0,3)
d) Irá imprimir: "O preço da fruta Pêra é R$ 5"

-----------------------------------------------------
Exercício 3
-----------------------------------------------------

a) A mensagem será: "Uncaught ReferenceError: mensagem is not defined".
b) Sim, a variavél mensagem não foi definida.
c) A variável é utilizada fora do bloco em que ela foi definida, logo não pertence ao escopo, e por conta disso ocorre o erro.

----------------------------------------------------- 
 Exercício 4 
----------------------------------------------------- */

let numero1, numero2, numero3

/* Item A*/
numero1 = Number(prompt("Digite o primeiro número."))
numero2 = Number(prompt("Digite o segundo número"))

if (numero1 > numero2) {
  console.log("Ordem descrescente:", numero1 + ", " + numero2)
} else {
  console.log("Ordem descrescente:", numero2 + ", " + numero1)
}
/* Item A, Números iguais > Ordem descrescente: 12, 12 */

/* Item B*/
numero1 = Number(prompt("Digite o primeiro número."))
numero2 = Number(prompt("Digite o segundo número"))
numero3 = Number(prompt("Digite o terceiro número"))

if (numero1 > numero2 && numero1 > numero3) {
  if (numero2 > numero3) {
    console.log("Ordem descrescente:", numero1 + ", " + numero2 + ", " + numero3)
  } else {
    console.log("Ordem descrescente:", numero1 + ", " + numero3 + ", " + numero2)
  }
} else if (numero2 > numero1 && numero2 > numero3) {
  if (numero1 > numero3) {
    console.log("Ordem descrescente:", numero2 + ", " + numero1 + ", " + numero3)
  } else {
    console.log("Ordem descrescente:", numero2 + ", " + numero3 + ", " + numero1)
  }
} else {
  if (numero1 > numero2) {
    console.log("Ordem descrescente:", numero3 + ", " + numero1 + ", " + numero2)
  } else {
    console.log("Ordem descrescente:", numero3 + ", " + numero2 + ", " + numero1)
  }
}
/* Item B, Números iguais > Ordem descrescente: 2, 2, 2 */

/* Item C */
numero1 = Number(prompt("Digite o primeiro número."))
numero2 = Number(prompt("Digite o segundo número"))
numero3 = Number(prompt("Digite o terceiro número"))

if (numero1 == numero2 && numero2 == numero3) {
  console.log("Números iguais:", "Digite pelo menos um número diferente dos demais!")
} else {
  if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
      console.log("Ordem descrescente:", numero1 + ", " + numero2 + ", " + numero3)
    } else {
      console.log("Ordem descrescente:", numero1 + ", " + numero3 + ", " + numero2)
    }
  } else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
      console.log("Ordem descrescente:", numero2 + ", " + numero1 + ", " + numero3)
    } else {
      console.log("Ordem descrescente:", numero2 + ", " + numero3 + ", " + numero1)
    }
  } else {
    if (numero1 > numero2) {
      console.log("Ordem descrescente:", numero3 + ", " + numero1 + ", " + numero2)
    } else {
      console.log("Ordem descrescente:", numero3 + ", " + numero2 + ", " + numero1)
    }
  }
}
/* Item C, Números iguais > Digite pelo menos um número diferente dos demais!

----------------------------------------------------- 
 Exercício 5
----------------------------------------------------- 
Diagram: https://drive.google.com/file/d/11cm9eLAcRZVj_Ab_dAgmAU-uHS1pqKfy/view?usp=sharing */

let animal, classificacao
let possuiOssos, possuiPelos, possuiPenas, serRacional, serTerrestre, vidaAquaticaParcial

const invertebrado = "Invertebrado"
const vertebrado = "Vertebrado"
const mamifero = "Mamífero"
const mamiferoNaoHumano = "Mamífero Não Humano"
const humano = "Humano"
const ave = "Ave"
const peixe = "Peixe"
const anfibio = "Anfíbio"
const reptil = "Réptil"

console.log("Classificação de Animais!")
console.log("Responda apenas 'Y/y' para SIM ou 'N/n' NÂO, qualquer valor diferente será subentendido como NÂO.")

animal = prompt("Qual é o nome do seu animal?", "Animal")

possuiOssos = prompt(animal + " possui ossos?", "N")
possuiOssos = possuiOssos == 'Y' || possuiOssos == 'y'

if (possuiOssos) {
  classificacao = vertebrado
  possuiPelos = prompt(animal + " possui pelos?", "N")
  possuiPelos = possuiPelos == 'Y' || possuiPelos == 'y'
  if (possuiPelos) {
    serRacional = prompt(animal + " é racional?", "N")
    serRacional = serRacional == 'Y' || serRacional == 'y'
    if (serRacional) {
      classificacao = humano
    } else {
      classificacao = mamiferoNaoHumano
    }
  } else {
    possuiPenas = prompt(animal + " possui penas?", "N")
    possuiPenas = possuiPenas == 'Y' || possuiPenas == 'y'
    if (possuiPenas) {
      classificacao = ave
    } else {
      serTerrestre = prompt(animal + " é um ser terrestre?", "N")
      serTerrestre = serTerrestre == 'Y' || serTerrestre == 'y'
      if (serTerrestre) {
        vidaAquaticaParcial = prompt(animal + " tem vida aquática parcial?", "N")
        vidaAquaticaParcial = vidaAquaticaParcial == 'Y' || vidaAquaticaParcial == 'y'
        if (vidaAquaticaParcial) {
          classificacao = anfibio
        } else {
          classificacao = reptil
        }
      } else {
        classificacao = peixe
      }
    }
  }
} else {
  classificacao = invertebrado
}

console.log("Seu animal, " + animal + ", é classificado como: " + classificacao)

