const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const getRandImg = images[Math.floor(Math.random() * images.length)];
const bgsrc = `../img/${getRandImg}`;
const body = document.querySelector("body");
body.style.backgroundImage = `url(${bgsrc})`;
