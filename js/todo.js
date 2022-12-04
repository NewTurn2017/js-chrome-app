const toDoForm = document.getElementById('todo-form')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')
const TODOS_KEY = 'todos'

let toDos = []

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(id) {
  const li = event.target.parentElement
  toDos = toDos.filter((toDo) => String(toDo.id) !== li.id)
  li.remove()
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function paintToDo(newTodoObj) {
  const li = document.createElement('li')
  li.id = newTodoObj.id
  const span = document.createElement('span')
  span.innerText = newTodoObj.text
  const button = document.createElement('a')
  button.id = 'deleteButton'
  button.innerText = 'X'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handlerToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener('submit', handlerToDoSubmit)

const savedToDosObj = localStorage.getItem(TODOS_KEY)

if (savedToDosObj !== null) {
  const parsedToDosObj = JSON.parse(savedToDosObj)
  toDos = parsedToDosObj
  toDos.forEach(paintToDo)
}
