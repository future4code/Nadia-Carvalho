import User from "./user";

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string,
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

/*Exercício 2:*/const NovoCliente = new Customer('stringdeID', 'cliente@ServiceWorker.com','Nadia','esqueciasenha2', '4332445677688998');

/*Exercício 4:*/ console.log(NovoCliente.introduceYourself());