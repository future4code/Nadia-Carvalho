import { User } from "./User"

enum TEACHER_ABILITY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public specialties: TEACHER_ABILITY[]
  ) {}
}

export const professor1 = new Teacher("0001", "Anthony Stark", "ironman@lebanu.com.br", [
  TEACHER_ABILITY.BACKEND,
  TEACHER_ABILITY.OOP,
  TEACHER_ABILITY.TYPESCRIPT,
  TEACHER_ABILITY.TESTES
])
export const professor2 = new Teacher("0002", "Nathalia Romanoff", "blackwidow@lebanu.com.br", [
  TEACHER_ABILITY.REACT, 
  TEACHER_ABILITY.REDUX, 
  TEACHER_ABILITY.CSS, 
  TEACHER_ABILITY.TYPESCRIPT,
  TEACHER_ABILITY.TESTES
])
export const professor3 = new Teacher("0003", "Bruce Banner", "strongestavenger@lebanu.com.br", [
  TEACHER_ABILITY.REACT, 
  TEACHER_ABILITY.REDUX, 
  TEACHER_ABILITY.CSS, 
  TEACHER_ABILITY.TYPESCRIPT,
  TEACHER_ABILITY.TESTES
])
export const professor4 = new Teacher("0004", "Carol Danvers", "captainmarvel@lebanu.com.br", [
  TEACHER_ABILITY.BACKEND,
  TEACHER_ABILITY.OOP,
  TEACHER_ABILITY.TYPESCRIPT,
  TEACHER_ABILITY.TESTES
])