// Tendo este pequeno texto em mente, você deve criar uma função que determine a que idade 
// histórica (em negrito no texto) um ano pertence. Ela deve esperar receber o ano e um outro
// parâmetro que seja a sigla "AC" ou "DC". Algumas características a mais desta função:
//       - Caso ela seja chamada sem passar uma sigla, ela deve automaticamente concluir que se 
//       trata de um ano "DC"
//       - Caso ela seja chamada passando um valor inválido (tanto para o ano como para a sigla),
//        ela deve retornar uma mensagem indicando um erro.

enum Eras {
  PREHISTORY = 'Pré-História',
  ANCIENT = 'Idade Antiga',
  MIDDLE = 'Idade Média',
  MODERN = 'Idade Moderna',
  CONTEMPORARY = 'Idade Contemporânea'
}
enum Ages {
  AC = 'AC',
  DC = 'DC'
}

function ValidateAC(year: number): string {
  if (year > 4000) {
    return Eras.PREHISTORY;
  } else {
    return Eras.ANCIENT;
  }
}

function ValidateDC(year: number): string {
  if (year < 476) {
    return Eras.MIDDLE;
  } else if (year < 1453) {
    return Eras.MODERN;
  } else {
    return Eras.CONTEMPORARY;
  }
}

function checkingAge(year: number, age?: string): string {
  if (!age) {
    age = Ages.DC;
  }
  if (year > 0) {
    switch (age) {
      case Ages.AC:
        return ValidateAC(year);
      case Ages.DC:
        return ValidateDC(year);
      default:
        return ("Era inválida!")
    }
  } else {
    return ("Ano inválido!")
  }
}

console.log(checkingAge(1987))