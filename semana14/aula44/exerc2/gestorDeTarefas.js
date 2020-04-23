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