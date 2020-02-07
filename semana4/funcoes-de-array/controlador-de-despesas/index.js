class Expense {
  constructor(value, type, description) {
    this.value = value
    this.type = type
    this.description = description
  }
  render(id) {
    let content = "<div class='expense'>"
    if (id != "") {
      content += "<h4>#" + id + " - " + this.type + "</h4>"
    } else {
      content += "<h4>" + this.type + "</h4>"
    }
    content += "<h5>R$ " + this.value + "</h5>"
    content += "<p>" + this.description + "</p>"
    content += "</div>"
    return content
  }
}

let expenseList = []

function addExpense() {
  let value = getElement("value").value
  let type = getElement("type").value
  let description = getElement("description").value
  if (value == "" || type == "" || description == "") {
    alert("Todos os valores são obrigatórios!")
    return
  }
  value = (parseInt(value))
  if (value <= 0) {
    alert("Um valor positivo tem que ser informado")
    return
  }
  let expense = new Expense(value, type, description)
  expenseList.push(expense)
  result()
  filter()
}

function filter() {
  let type = getElement("detail-type").value
  let max = parseInt(getElement("max-value").value)
  let min = parseInt(getElement("min-value").value)
  if (min <= 0 || min > max || max <= 0) {
    alert("Confirma os valores para mínimo e máximo!")
    return
  }
  let filteredList = expenseList.filter(ex => type == "" || ex.type == type)
  if (min > 0) {
    filteredList = filteredList.filter(ex => ex.value >= min)
  }
  if (max > 0) {
    filteredList = filteredList.filter(ex => ex.value <= max)
  }
  getElement("filter-result", (el) => {
    el.innerHTML = ""
    filteredList.forEach( (ex, id) => el.innerHTML += ex.render(id+1))
  })
}

function reset() {
  let vazio = (el) => el.value = ""
  getElement("detail-type", vazio)
  getElement("min-value", vazio)
  getElement("max-value", vazio)
  filter()
}

function result() {
  let total = expenseList.reduce((acc, exp) => acc + exp.value, 0)
  getElement("result", el => {
    el.innerHTML = "R$" + total
  })
}

function getElement(el, func) {
  let element = document.getElementById(el)
  if (func) {
    func(element)
  } return element
}