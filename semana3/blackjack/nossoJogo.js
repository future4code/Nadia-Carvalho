import comprarCarta from './naoMexer.js'

// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
  const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
  console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
  console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
 
if (!confirm("Quer iniciar uma nova rodada?")) {
   console.log("O jogo acabou!")
} else {
  
  let userCards = []
  let cpuCards = []

  let userScore = 0
  let cpuScore = 0
  
  let userCardsString = ""
  let cpuCardsString = ""

  // Inicia jogo comprando duas cartas para o usuario e o computador
  userCards = [comprarCarta(), comprarCarta()]
  cpuCards = [comprarCarta(), comprarCarta()]

  // Atualiza a pontuação e as cartas de cada um
  for (let i = 0; i < 2; i++) {
    userScore += userCards[i].valor
    cpuScore += cpuCards[i].valor
    userCardsString += userCards[i].texto + " "
    cpuCardsString += cpuCards[i].texto + " "
  }

  // Exibe cartas e pontuação
  console.log("Usuário - cartas:", userCardsString + " - Pontuação " + userScore)
  console.log("Computador - cartas:", cpuCardsString + " - Pontuação " + cpuScore)

  // Verifica resultado
  if (userScore === cpuScore || userScore > 21 && cpuScore > 21) {
    console.log("Resultado:", "Empate!")
  } else if (userScore <= 21 && cpuScore <= 21) {
    if (userScore > cpuScore) {
      console.log("Resultado:", "O usuário ganhou!")
    } else {
      console.log("Resultado:", "O computador ganhou!")
    }
  } else if (userScore > 21) {
    console.log("Resultado:", "O computador ganhou!")
  } else {
    console.log("Resultado:", "O usuário ganhou!")
  }

}