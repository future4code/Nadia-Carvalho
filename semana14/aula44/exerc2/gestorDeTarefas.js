/**
 * Crie uma aplicação Node que receba uma string representando o **nome da lista de tarefas**
 *  e uma string representando **uma nova tarefa**, em seguida o programa deve adicionar a **nova tarefa**
 *  em um arquivo que tenha **o nome da lista de tarefas.**
 */

const taskListName = process.argv[2];
const newTask = process.argv[3];

function createTask (taskListName, taskContent){
  const fs = require('fs');
  try {
    fs.appendFileSync(taskListName, taskContent + '\n')
    console.log("Tarefa criada com sucesso!")
  } catch (err) {
    console.log(err)
  }
}

createTask(taskListName, newTask)