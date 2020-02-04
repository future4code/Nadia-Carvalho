function addTask() {
  const input = document.getElementById("CreateTask")
  const select = document.getElementById("DayOfWeek")
  if (select.value == "") {
    alert("Select a day of the week")
  } else if (input.value == "") {
    alert("Type in a task to continue")
  } else {
    const list = document.getElementById(select.value)
    list.innerHTML+= "<li>"+ input.value +"</li>"
  }
}