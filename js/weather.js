const API_KEY = '3ab09e230a44d682ac242b986c9cec33'

function onGeoOk(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child')
      const city = document.querySelector('#weather span:last-child')
      weather.innerText = `현재 위치는 ${data.name}이며,`
      city.innerText = `날씨는 ${data.weather[0].main}하고 온도는 ${parseInt(
        data.main.temp
      )}도입니다.`
    })
}
function onGeoError() {
  alert("Can't find you. No weater for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
