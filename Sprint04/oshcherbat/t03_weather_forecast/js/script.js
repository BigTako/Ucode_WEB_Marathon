const weatherSectionsContainer = document.getElementById("forecast-sections-container");

const API_KEY = 'a65ca9481baf5edb4f38245228e8b7c1';
const latitude = 37.7749; // Example latitude (e.g., for San Francisco)
const longitude = -122.4194; // Example longitude (e.g., for San Francisco)
const proxy = "https://cors-anywhere.herokuapp.com/";
// Make API request
fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 33; i+=8){
        const temperature = data.list[i+5].main.temp; // Temperature in Kelvin

        // Convert temperature to Celsius
        const temperatureCelsius = temperature - 273.15;

        // Extract the weather description
        const weatherDescription = data.list[i+5].weather[0].description;

        let newSection = document.createElement("div");
        let forecastDate = document.createElement("h2");
        let forecastImage = document.createElement("img");
        let forecastTemperature = document.createElement("h3");

        newSection.classList.add("forecast-section");
        
        forecastDate.classList.add("forecast-date");
        forecastDate.textContent = new Date(data.list[i].dt_txt).toLocaleDateString();
        
        switch(weatherDescription){
            case "clear sky":
                forecastImage.setAttribute("src", "./assets/images/sun.png");
                break;
            case "scattered clouds":
                forecastImage.setAttribute("src", "./assets/images/cloud.png");
                break;
            case "broken clouds":
                forecastImage.setAttribute("src", "./assets/images/cloudy.png");
                break;
            case "overcast clouds":
                forecastImage.setAttribute("src", "./assets/images/overcast_clouds.png");
                break;
            case "light rain":
                forecastImage.setAttribute("src", "./assets/images/light_rain.png");
                break;
            case "rain":
                forecastImage.setAttribute("src", "./assets/images/rain.png");
                break;
            default:
                forecastImage.setAttribute("src", "./assets/images/default.png");
                break;

        }
        
        forecastTemperature.textContent = temperatureCelsius.toFixed(2) + '°C';

        newSection.appendChild(forecastDate);
        newSection.appendChild(forecastImage);
        newSection.appendChild(forecastTemperature);
        
        weatherSectionsContainer.appendChild(newSection);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });