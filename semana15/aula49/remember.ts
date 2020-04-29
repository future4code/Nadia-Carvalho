export class User {
  protected name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public sayHello(): void{
		console.log("Hello there!")
  };
  public getAge: number{
		return this.age;
  };
  //1 - o método public não consegue acessar a propriedade age, pois ela está como private na linha 3.
  public sayUserLuckyNumber():number {
		return this.age * 7;
  };
}
class UserAdmin extends User {
  static HELLO: string = "Hello, guys!";
  public email: string;
  // 2 - o constructor sem 'super'. //3 - constructor com declaração de 3 informações mas puxando apenas duas. 
  ]
  constructor(name: string, age: number, email: string) {
    super(name, age)
    //4-  name é uma string e não pode receber número.
		this.name = 2;
    this.email = email;
  }
  // as linhas 31 e 32 também acusaram erro, mas eu não sei se entendi o erro então não contei.
  public getAge(): void {
    console.log(this.age);
  }
  public sayHello(): void {
    super.sayHello();
     // a linha 37 também acusou erro, mas eu não sei se entendi o erro então não contei.
    console.log(this.HELLO);
  }
}//5- essa chave aparentemente está sobrando. Mas isso pode ter sido culpa minha rs 