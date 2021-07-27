const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let todos = [];
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todos = parseTodos;
  //parseTodos.forEach((item) => paintToDo(item));
  parseTodos.forEach(paintToDo);
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function hdToDoListDelete(e) {
  /* const idx = todos.indexOf(e.target.parentNode.firstChild.innerText);
  if (idx > -1) todos.splice(idx, 1); */

  const li = e.target.parentNode;
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
  saveTodos();
}

function filterItem(item) {
  return item.id !== Number;
}

function paintToDo(newToDoObj) {
  const nodeLi = document.createElement("li");
  const nodeSpan = document.createElement("span");
  const nodeBtn = document.createElement("button");
  nodeBtn.addEventListener("click", hdToDoListDelete);
  nodeBtn.innerText = "x";
  nodeSpan.innerText = newToDoObj.text;
  nodeLi.id = newToDoObj.id;
  nodeLi.appendChild(nodeSpan);
  nodeLi.appendChild(nodeBtn);
  todoList.appendChild(nodeLi);
}

function hdTodoSubmit(e) {
  e.preventDefault();
  const todoText = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: todoText,
  };
  todos.push(newToDoObj);
  saveTodos();
  paintToDo(newToDoObj);
}

todoForm.addEventListener("submit", hdTodoSubmit);
