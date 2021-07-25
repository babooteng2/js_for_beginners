const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";
const savedUsername = localStorage.getItem(USERNAME);
let username;

function hdLoginSubmit(e) {
  e.preventDefault();
  username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  username = savedUsername ? savedUsername : loginInput.value;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

if (savedUsername) {
  paintGreetings();
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", hdLoginSubmit);
}
