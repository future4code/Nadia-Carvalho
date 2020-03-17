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

export const completarTarefa = (task) => {
  return {
    type: 'COMPLETAR_TAREFA',
    payload: {
      task: task
    }
  }
}

export const completarTodas = () => {
  return {
    type: 'COMPLETAR_TODAS',
    payload: {
    }
  }
}

export const removerTarefa = (task) => {
  return {
    type: 'REMOVER_TAREFA',
    payload: {
      task: task
    }
  }
}

export const removerTodas = () => {
  return {
    type: 'REMOVER_TODAS',
    payload: {
    }
  }
}
