function onGeoSuccess(position) {
  console.log(position);
  console.log(position.coords.latitude, position.coords.longitude);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
}

function onGeoError() {
  alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
