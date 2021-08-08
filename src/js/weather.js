function onGeoSuccess(position) {
  console.log(position);
  console.log(position.coords.latitude, position.coords.longitude);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79620f3550dc9b903dacf86ba015f13d&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.getElementById("weather");
      const weatherSpan = weatherContainer.querySelector("span:first-child");
      const citySpan = weatherContainer.querySelector("span:last-child");
      console.log(data.name, data.main.temp, data.weather[0].main);
      const city = data.name;
      const country = data.sys.country;
      const temp = data.main.temp;
      const weather = data.weather[0].main;

      citySpan.innerText = `${city} @ ${country}`;
      weatherSpan.innerText = `${temp} / ${weather}`;
    });
}

function onGeoError() {
  alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
