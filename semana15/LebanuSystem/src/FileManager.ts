import * as fs from "fs";
import { Student } from "./Student"
import { Teacher} from "./Teachers"
import { Mission } from "./Missions"

class FileManager {
  constructor(private filePath: string) { }

  public setFilePath(path: string): void {
    this.filePath = path;
  }

  public writeFile(data: any): void {
    fs.appendFileSync(this.filePath, JSON.stringify(data));
  }

  public readFile(): any {
    const data = fs.readFileSync(this.filePath);
    return JSON.parse(data.toString());
  }
}
export function saveStudent(student: Student[]){
  const fm = new FileManager("archives/students.json")
  fm.writeFile(student);
};

export function saveTeacher(teacher: Teacher[]){
  const fm = new FileManager("archives/teachers.json")
  fm.writeFile(teacher);
};

export function saveMission(mission: Mission[]){
  const fm = new FileManager("archives/missions.json")
  fm.writeFile(mission);
};