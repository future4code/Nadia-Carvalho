import { User } from "./User";
import moment from "moment"

export class Student implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public birthDate: moment.Moment,
    public hobbies: string[]
  ) {}

  public getAge(): number {
    return moment().diff(this.birthDate, "years")
  } 
}

export const aluno1 = new Student("001", "Captain Steve Rogers", "captain.america@gmail.com", moment("1918-07-04"), ["saving the Earth", "riding motorcyles"])
export const aluno2 = new Student("002", "Thor Odinson", "pointbreak@gmail.com", moment("1962-08-01"), ["smashing mugs", "weight lifting"])