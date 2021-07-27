const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function paintToDo(newToDo) {
  const nodeLi = document.createElement("li");
  const nodeSpan = document.createElement("span");
  nodeSpan.innerText = newToDo;
  nodeLi.appendChild(nodeSpan);
  todoList.appendChild(nodeLi);
}

function hdTodoSubmit(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  paintToDo(newToDo);
}

todoForm.addEventListener("submit", hdTodoSubmit);
