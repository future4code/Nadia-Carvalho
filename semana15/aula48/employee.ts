import User from './user'

class Employee extends User{
  protected admissionDate: Date;
  protected baseSalary: number;

  constructor(
  id: string,
  email: string,
  name: string,
  password: string,
	admissionDate: Date,
  baseSalary: number
	){
    super(id, email, name, password);
    console.log("Chamando o construtor da classe User")
		this.admissionDate = admissionDate
		this.baseSalary = baseSalary
	}

	protected getAdmissionDate(): Date {
		return this.admissionDate
	}

	protected getBaseSalary(): number {
		return this.baseSalary
	}
  
}

const NovoFuncionario = new Employee('idDeFuncionario1','lukethecatioro@gmail.com','Luke Skywalker', 'woofwoof', new Date(),10000);
