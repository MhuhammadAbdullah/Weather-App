// Selecting the necessary elements based on provided HTML
var cityInput = document.querySelector('.city-input');
var searchBtn = document.querySelector('.search-btn');

var weatherInfoSection = document.querySelector('.weather-info');
var searchCitySection = document.querySelector('.search-city');
var notFoundSection = document.querySelector('.not-found');

var countryTxt = document.querySelector('.country-txt');
var tempTxt = document.querySelector('.temp-txt'); // Corrected to match the class name
var conditionTxt = document.querySelector('.condition-txt');
var humidityValueTxt = document.querySelector('.humidity-value-txt');
var windValueTxt = document.querySelector('.wind-value-txt');
var weatherSummaryImg = document.querySelector('.weather-summary-img');
var currentDateTxt = document.querySelector('.current-date-txt');

var forecastItemsContainer = document.querySelector('.forecast-items-container');

var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814';

// On page load, ask for location
window.onload = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // If location is allowed
                const { latitude, longitude } = position.coords;
                console.log("Latitude:", latitude, "Longitude:", longitude); // Debug log
                getWeatherByCoordinates(latitude, longitude);
            },
            (error) => {
                // Handle location access errors
                handleLocationError(error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
        showDisplaySection(searchCitySection);
    }
};

// Fetch weather data based on coordinates
function getWeatherByCoordinates(lat, lon) {
    const apiKey = "c463ee4e1a5b11e96cb8c7d900a05814"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    // Fetch weather data
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Weather Data:", data); // Debug log
            displayWeatherData(data);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert("Unable to fetch weather data. Please try again.");
        });
}

// Display weather data
function displayWeatherData(data) {
    const weatherInfo = `
        Location: ${data.name}
        Temperature: ${data.main.temp}°C
        Weather: ${data.weather[0].description}
    `;
    showDisplaySection(weatherInfoSection);
}

// Handle location errors
function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Location access denied. Please allow location to use this feature.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable. Please try again.");
            break;
        case error.TIMEOUT:
            alert("Location request timed out. Please try again.");
            break;
        default:
            alert("An unknown error occurred. Please try again.");
            break;
    }
    showDisplaySection(searchCitySection);
}



// Event listener for the Search button
searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value.trim());
        cityInput.value = '';
        cityInput.blur();
    }
});

// Event listener for pressing Enter in the input field
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value.trim());
        cityInput.value = '';
        cityInput.blur();
    }
});

// Fetch weather data from the API
async function getFetchData(endPoint, city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    var response = await fetch(apiUrl);

    if (!response.ok) {
        console.error(`Error fetching data: ${response.status}`);
        return null; // Return null in case of an error
    }

    return response.json();
}

function getWeatherIcon(id, isNight) {
    if (id >= 200 && id < 201) {
        return 'weather-assets/thunderstorm-light rain.png';
    } else if (id >= 201 && id < 202) {
        return 'weather-assets/thunderstorm-heavy-rain.png';
    } else if (id >= 202 && id < 300) {
        return 'weather-assets/thunderstorm.png';
    } else if (id >= 300 && id < 500) {
        return 'weather-assets/drizzle.png';
    } else if (id === 500) {
        return 'weather-assets/light rain.png';
    } else if (id >= 501 && id < 502) {
        return 'weather-assets/moderate rain.png';
    } else if (id === 503) {
        return 'weather-assets/very heavy rain.png';
    } else if (id >= 503 && id < 600) {
        return 'weather-assets/extreme.png';
    } else if (id >= 600 && id < 700) {
        return 'weather-assets/heavy-shower-snow.png';
    } else if (id >= 700 && id < 731) {
        return 'weather-assets/dust.png';
    } else if (id >= 731 && id < 761) {
        return 'weather-assets/atmosphere.png';
    } else if (id >= 761 && id < 800) {
        return 'weather-assets/ash.png';
    } else if (id === 800) {
        return isNight ? 'weather-assets/clear-sky-night.png' : 'weather-assets/clear-sky-day.png';
    } else if (id === 801) {
        return isNight ? 'weather-assets/few clouds-night.png' : 'weather-assets/few clouds-day.png';
    } else if (id === 802) {
        return isNight ? 'weather-assets/overcast clouds-night.png' : 'weather-assets/overcast clouds-day.png';
    } else if (id >= 803 && id < 804) {
        return 'weather-assets/scattered-clouds.png';
    } else {
        // Fallback condition
        console.warn("Unrecognized weather condition ID:", id);
        return 'weather-assets/scattered-clouds.png'; // Use a generic fallback image here
    }
}

// Show the loading spinner
function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
}

// Hide the loading spinner
function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

async function updateWeatherInfo(city) {

     // Show loading spinner
     showLoadingSpinner();

    var weatherData = await getFetchData('weather', city);

    // Hide loading spinner
    hideLoadingSpinner();

    if (!weatherData || weatherData.cod != 200) {
        // Clear previous data
        countryTxt.textContent = '';
        tempTxt.textContent = '';
        conditionTxt.textContent = '';
        humidityValueTxt.textContent = '';
        windValueTxt.textContent = '';
        weatherSummaryImg.src = '';
        currentDateTxt.textContent = '';
        // Show "Not Found" section
        showDisplaySection(notFoundSection);
        console.error("Weather data not found or API error.");
        return;
    }

    console.log("Weather data response:", weatherData); // Debugging line

    // Destructure safely
    var { name: country, main: { temp, humidity }, weather, wind, sys } = weatherData;

    if (!weather || !weather[0] || !wind || !sys) {
        console.error("Incomplete weather data received.");
        return;
    }

    var { id, main } = weather[0];
    var { speed } = wind;
    var { sunrise, sunset } = sys;

    var currentTime = new Date().getTime() / 1000; // Current time in seconds
    var isNight = currentTime < sunrise || currentTime > sunset;

    countryTxt.textContent = country;
    tempTxt.textContent = `${Math.round(temp)} °C`;
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = `${humidity}%`;
    windValueTxt.textContent = `${Math.round(speed)} m/s`;
    currentDateTxt.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });

    // Handle ID validation with a fallback
    var iconSrc = getWeatherIcon(id, isNight);
    weatherSummaryImg.src = iconSrc;

    // Dynamically set the size of the image
    weatherSummaryImg.style.width = '90px';
    weatherSummaryImg.style.height = '90px';
    weatherSummaryImg.style.objectFit = 'contain';

    await updateForecastInfo(city)

    showDisplaySection(weatherInfoSection);
}

// async function updateForecastInfo(city) {
//     var forecastData = await getFetchData('forecast', city);

//     var timeTaken = '12:00:00'
//     var todayDate = new Date().toISOString().split('T')[0]

//     forecastItemsContainer.innerHTML = ''
//     forecastData.list.forEach(forecastWeather => {
//         if (forecastWeather.dt_txt.includes(timeTaken) &&
//             !forecastWeather.dt_txt.includes(todayDate)) {
//             updateForecastItems(forecastWeather);
//             // console.log(forecastWeather);
//         }


//     })
//     // console.log(todayDate);
// }

// function updateForecastItems(weatherData) {
//     console.log(weatherData);
//     var {
//         dt_txt: date,
//         weather: [{ id }],
//         main: { temp }
//     } = weatherData;

//     var dateTaken = new Date(date)
//     var dateOption = {
//         day: '2-digit',
//         month: 'short'
//     }

//     var dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

//     var forecastItem = `
//         <div class="forecast-items">
//           <h5 class="forecast-items-date regular-txt">${dateResult}</h5>
//           <img src="${getWeatherIcon(id)}" class="forecast-items-img">
//           <h5 class="forecast-items-temp">${Math.round(temp)} °C</h5>
//         </div>
//     `
//     forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
// }


async function updateForecastInfo(city) {
    var forecastData = await getFetchData('forecast', city);

    var timeTaken = '12:00:00'; // Sirf 12 baje ka data show karein
    var todayDate = new Date().toISOString().split('T')[0];

    forecastItemsContainer.innerHTML = ''; // Purana data clear karein
    var forecastCount = 0; // 7 din tak limit set karein

    forecastData.list.forEach(forecastWeather => {
        if (
            forecastWeather.dt_txt.includes(timeTaken) &&
            !forecastWeather.dt_txt.includes(todayDate) &&
            forecastCount < 7 // Sirf pehle 7 din ka data
        ) {
            updateForecastItems(forecastWeather);
            forecastCount++; // Counter increment karein
        }
    });
}
function updateForecastItems(weatherData) {
    console.log(weatherData);
    var {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData;

    var dateTaken = new Date(date);
    var dateOption = {
        weekday: 'short', // Day name bhi add karein (e.g., Mon)
        day: '2-digit',
        month: 'short'
    };

    var dateResult = dateTaken.toLocaleDateString('en-US', dateOption);

    var forecastItem = `
        <div class="forecast-items">
          <h5 class="forecast-items-date regular-txt">${dateResult}</h5>
          <img src="${getWeatherIcon(id)}" class="forecast-items-img">
          <h5 class="forecast-items-temp">${Math.round(temp)} °C</h5>
        </div>
    `;
    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem);
}


// Show the selected section and hide others
function showDisplaySection(section) {
    [weatherInfoSection, searchCitySection, notFoundSection].forEach((sec) => {
        sec.style.display = 'none'; // Hide all sections
    });
    section.style.display = 'flex'; // Show the selected section
}
