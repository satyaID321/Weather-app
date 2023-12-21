const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-icon");

const apikey = "b8c537953aabb681329344cafb59c7dc";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherImg.src = "images/clouds.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherImg.src = "images/rain.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherImg.src = "images/clear.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherImg.src = "images/drizzle.png";
  }
  
  else if (data.weather[0].main == "Mist") {
    weatherImg.src = "images/mist.png";
  }
  else if (data.weather[0].main == "Snow") {
    weatherImg.src = "images/snow.png";
  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});