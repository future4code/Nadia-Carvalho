export const criarTarefa = (task) => {
  return {
    type: 'CRIAR_TAREFA',
    payload: {
      task: task
    }
  }
}

export const filtrarTarefa = (filter) => {
  return {
    type: 'FILTRAR_TAREFA',
    payload: {
      filter: filter
    }
  }
}

export const alternaTarefa = (task) => {
  return {
    type: 'TOGGLE_TAREFA',
    payload: {
      id: task
    }
  }
}

export const completarTodas = () => {
  return {
    type: 'COMPLETAR_TODAS',
  }
}

export const removerTarefa = (task) => {
  return {
    type: 'REMOVER_TAREFA',
    payload: {
      id: task
    }
  }
}

export const removerTodas = () => {
  return {
    type: 'REMOVER_TODAS',
  }
}
