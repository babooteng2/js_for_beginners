const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function hdTodoSubmit(e) {
  e.preventDefault();
  const nodeLi = document.createElement("li");
  nodeLi.innerText = todoInput.value;
  todoList.appendChild(nodeLi);
  todoInput.value = "";
}

todoForm.addEventListener("submit", hdTodoSubmit);
