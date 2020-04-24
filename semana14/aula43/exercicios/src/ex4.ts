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
  MIDDLE ='Idade Média',
  MODERN = 'Idade Moderna',
  CONTEMPORARY = 'Idade Contemporânea'
}
enum Ages {
AC = 'AC',
DC = 'DC'
}

function checking(year: number, age?: string): string {

  return
}
