/*Exercício 1:*/
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
    password: string,
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
    this.password = password

	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
  }
  
  public introduceYourself(): string {
    return 'Olá, bom dia! =)'
  } /*Exercício 4:*/
}

/*Exercício 1:*/ const NovoUsuario = new User('Nadia','nadia@labenu.com.br', 'Nadia Carvalho', 'esqueciasenha');
/*Exercício 4:*/ console.log(NovoUsuario.introduceYourself())


export default User;
