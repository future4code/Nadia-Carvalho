const initialState = {
  tasks: [],
  filter: null,
};

const tasksReducer = (state = initialState, action) => {
  let tasks
  switch (action.type) {
    case "CRIAR_TAREFA":
      tasks = state.tasks
      const newTask = {
        name: action.payload.task,
        completed: false,
      }
      tasks.push(newTask)
      return { ...state, tasks: tasks };
    case "FILTRAR_TAREFA":
      return { ...state, filter: action.payload.filter };
    case "COMPLETAR_TAREFA":
      tasks = state.tasks.map((task) => {
        if (task.name === action.payload.task) {
          task.completed = true
        } return task
      })
      return { ...state, tasks: tasks };
    case "COMPLETAR_TODAS":
      tasks = state.tasks.map((task) => {
        task.completed = true
        return task
      })
      return { ...state, tasks: tasks };;
    case "REMOVER_TAREFA":
      tasks = state.tasks.filter((task) => {
        return task.name !== action.payload.task
      })
      return { ...state, tasks: tasks };
    case "REMOVER_TODAS":
      return { ...state, tasks: initialState.tasks };
    default:
      return state;
  }
};

export default tasksReducer;