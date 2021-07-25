const clock = document.querySelector("h2#clock");

function numberFormatter(num) {
  return num.toString().padStart(2, "0");
}

function getTime() {
  const date = new Date();
  const hours = numberFormatter(date.getHours());
  const minutes = numberFormatter(date.getMinutes());
  const seconds = numberFormatter(date.getSeconds());
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(() => {
  getTime();
}, 1000);
