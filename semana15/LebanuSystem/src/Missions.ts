import moment from "moment"
import { Student } from "./Student"
import { Teacher } from "./Teachers"
import { start } from "repl";

export enum MODULES {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
}

export abstract class Mission {
  private name: string = "";

  constructor(
    private id: string,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule: number = undefined,
    private nightClass: boolean = false,
  ) { }

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getStartDate(): moment.Moment {
    return this.startDate;
  }
  public getEndDate(): moment.Moment {
    return this.endDate;
  }
  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }
  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }
  public addStudent(student: Student) {
    this.students.push(student);
  }
  public setName(name: string) {
    this.name = name;
  }
  public isNightClass(): boolean {
    return this.nightClass;
  }
  public getAgeById(id: string): number {
    return this.students.find(student => student.id === id).getAge();
  }
}

export class FullTimeMission extends Mission {
  constructor(
    id: string,
    startDate: moment.Moment,
    endDate: moment.Moment,
    teachers: Teacher[] = [],
    students: Student[] = [],
    currentModule: number = undefined,
  ) {
    super(id, startDate, endDate, teachers, students, currentModule, false)
  }
  public setName(name: string) {
    name = name.replace("-na-night", "")
    super.setName(name);
  }
}

export class NightMission extends Mission {
  constructor(
    id: string,
    startDate: moment.Moment,
    endDate: moment.Moment,
    teachers: Teacher[] = [],
    students: Student[] = [],
    currentModule: number = undefined,
  ) {
    super(id, startDate, endDate, teachers, students, currentModule, true)
  }
  public setName(name: string) {
    if (name.indexOf("-na-night") === -1) {
      name = name + "-na-night"
    }
    super.setName(name);
  }
}