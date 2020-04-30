export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}
//const lugar: Place = new Place('82410-010')


/*  a. Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`).
 Qual foi o erro que o Typescript gerou?
 Gerou o seguinte erro: "Cannot create an instance of an abstract class."

 b. Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
 Precisaríamos criar uma classe que extende a classe Place, com um constructor e um super, e só depois disso
 seria possível criar a instância.
 */