import { Teacher, TEACHER_ABILITY } from "./Teachers";
import { Student } from "./Student";
import { FullTimeMission, NightMission, MODULES } from "./Missions";
import {saveMission, saveStudent, saveTeacher} from "./FileManager";
import moment from "moment";

//Criar estudante;
const aluno1 = new Student(
  "001",
  "Captain Steve Rogers",
  "captain.america@gmail.com",
  moment("1918-07-04"),
  [
    "saving the Earth",
    "riding motorcyles"
  ]
)
const aluno2 = new Student(
  "002",
  "Thor Odinson",
  "pointbreak@gmail.com",
  moment("1962-08-01"),
  [
    "smashing mugs",
    "weight lifting"
  ]
)
const aluno3 = new Student(
  "003",
  "Thanos",
  "inevitable@gmail.com",
  moment("1973-02-01"),
  [
    "snapping fingers",
    "geology enthusiast"
  ]
)
const aluno4 = new Student(
  "004",
  "Loki Laufeyson",
  "trickster@gmail.com",
  moment("1962-10-01"),
  [
    "pretending I'm dead",
    "stabbing people"
  ]
)
//Criar docente;
const professor1 = new Teacher(
  "0001",
  "Anthony Stark",
  "ironman@lebanu.com.br",
  ["thermonuclear astrophysics"],
  [
    TEACHER_ABILITY.BACKEND,
    TEACHER_ABILITY.OOP,
    TEACHER_ABILITY.TYPESCRIPT,
    TEACHER_ABILITY.TESTES
  ]
)
const professor2 = new Teacher(
  "0002",
  "Nathalia Romanoff",
  "blackwidow@lebanu.com.br",
  ["developing my very specific skill set"],
  [
    TEACHER_ABILITY.REACT,
    TEACHER_ABILITY.REDUX,
    TEACHER_ABILITY.CSS,
    TEACHER_ABILITY.TYPESCRIPT,
    TEACHER_ABILITY.TESTES
  ]
)
const professor3 = new Teacher(
  "0003",
  "Bruce Banner",
  "strongestavenger@lebanu.com.br",
  ["smash!"],
  [
    TEACHER_ABILITY.REACT,
    TEACHER_ABILITY.REDUX,
    TEACHER_ABILITY.CSS,
    TEACHER_ABILITY.TYPESCRIPT,
    TEACHER_ABILITY.TESTES
  ]
)
const professor4 = new Teacher(
  "0004",
  "Carol Danvers",
  "captainmarvel@lebanu.com.br",
  ["flying jets", "listening to 90's punk rock"],
  [
    TEACHER_ABILITY.BACKEND,
    TEACHER_ABILITY.OOP,
    TEACHER_ABILITY.TYPESCRIPT,
    TEACHER_ABILITY.TESTES
  ]
)
//Criar turma;
const avengersMission = new FullTimeMission(
  "Avg01",
  moment("2020-04-30"),
  moment("2020-10-30"),
  [],
  [],
  MODULES.FOUR)
  avengersMission.setName("Avengers")

const villainsMission = new NightMission(
  "Vil01",
  moment("2020-04-30"),
  moment("2020-10-30"),
  [],
  [],
  MODULES.FOUR)
  villainsMission.setName("Villains")
  

//Adicionar estudante na turma;
avengersMission.addStudent(aluno1);
avengersMission.addStudent(aluno2);
villainsMission.addStudent(aluno3);
villainsMission.addStudent(aluno4);

//Adicionar docente na turma;
avengersMission.addTeacher(professor1);
avengersMission.addTeacher(professor2);
villainsMission.addTeacher(professor3);
villainsMission.addTeacher(professor4);

//Pegar a idade de algum estudante a partir do id
avengersMission.getAgeById(aluno1.id);
villainsMission.getAgeById(aluno3.id);

saveStudent([aluno1, aluno2, aluno3, aluno4]);
saveTeacher([professor1, professor2, professor3, professor4]);
saveMission([avengersMission, villainsMission]);