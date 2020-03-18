const initialState = {
  taskList: [],
  filter: null,
};

const taskReducer = (state = initialState, action) => {
  let taskList
  switch (action.type) {
    case "CRIAR_TAREFA":
      const newTask = {
        name: action.payload.task,
        completed: false,
        id: Date.now()
      }
      return { ...state, taskList: [...state.taskList, newTask] };

    case "FILTRAR_TAREFA":
      return { ...state, filter: action.payload.filter };

    case "TOGGLE_TAREFA":
      taskList = state.taskList.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = !task.completed
        } return task
      })
      return { ...state, taskList: taskList };

    case "COMPLETAR_TODAS":
      taskList = state.taskList.map((task) => {
        task.completed = true
        return task
      })
      return { ...state, taskList: taskList };

    case "REMOVER_TAREFA":
      taskList = state.taskList.filter((task) => {
        return task.id !== action.payload.id
      })
      return { ...state, taskList: taskList };

    case "REMOVER_COMPLETAS":
      taskList = state.taskList.filter((task) => {
        return !task.completed
      })
      return { ...state, taskList: taskList };
      
    default:
      return state;
  }
};

export default taskReducer;