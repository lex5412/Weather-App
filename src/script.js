function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
 let temperature=response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

function searchCity(city) {
  let apiKey = "316bof0093dffa4f62eb0cbccct9293c";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
