const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setTimeout(() => {
  sayHello();
}, 3000);

function getTime() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getTime();
setInterval(() => {
  getTime();
}, 1000);
