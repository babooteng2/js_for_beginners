(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var todoForm=document.querySelector("#todo-form"),todoInput=todoForm.querySelector("input"),todoList=document.querySelector("#todo-list"),TODOS_KEY="todos",todos=[],savedTodos=localStorage.getItem(TODOS_KEY);if(savedTodos){var parseTodos=JSON.parse(savedTodos);todos=parseTodos,parseTodos.forEach(paintToDo)}function saveTodos(){localStorage.setItem(TODOS_KEY,JSON.stringify(todos))}function hdToDoListDelete(o){var t=o.target.parentNode;todos=todos.filter(function(o){return o.id!==parseInt(t.id)}),t.remove(),saveTodos()}function filterItem(o){return o.id!==Number}function paintToDo(o){var t=document.createElement("li"),e=document.createElement("span"),d=document.createElement("button");d.addEventListener("click",hdToDoListDelete),d.innerText="x",e.innerText=o.text,t.id=o.id,t.appendChild(e),t.appendChild(d),todoList.appendChild(t)}function hdTodoSubmit(o){o.preventDefault();var t=todoInput.value;todoInput.value="";var e={id:Date.now(),text:t};todos.push(e),saveTodos(),paintToDo(e)}todoForm.addEventListener("submit",hdTodoSubmit);

},{}]},{},[1]);