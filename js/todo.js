const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

function hdToDoListDelete(e) {
  //   todoList.removeChild(e.target.parentNode);
  const li = e.target.parentNode;
  li.remove();
}

function paintToDo(newToDo) {
  const nodeLi = document.createElement("li");
  const nodeSpan = document.createElement("span");
  const nodeBtn = document.createElement("button");
  nodeBtn.addEventListener("click", hdToDoListDelete);
  nodeBtn.innerText = "x";
  nodeSpan.innerText = newToDo;
  nodeLi.appendChild(nodeSpan);
  nodeLi.appendChild(nodeBtn);
  todoList.appendChild(nodeLi);
}

function hdTodoSubmit(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  paintToDo(newToDo);
}

todoForm.addEventListener("submit", hdTodoSubmit);
