// var cityInput = document.querySelector('.city-input');
// var searchBtn = document.querySelector('.search-btn');

// var weatherInfoSection = document.querySelector('weather-info');
// var searchCitySection = document.querySelector('.city-search');
// var notFoundSection = document.querySelector('.not-found');

// var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814'

// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value)
//         cityInput.value = '';
//         cityInput.blur();
//     }
// })

// cityInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' && cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();

//     }
// })

// async function getFetchData(endPoint, city) {
//     var apiUrl = `http://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//     var response = await fetch(apiUrl)

//     return response.json();
// }
// async function updateWeatherInfo(city) {
//     var weatherData = await getFetchData('weather', city);

//     if (weatherData.cod != 200) {
//         showDisplaySection(notFoundSection)
//         return
//     }

//     showDisplaySection(weatherInfoSection)
// }
// function showDisplaySection(section) {
//     [weatherInfoSection, searchCitySection, notFoundSection]
//         .forEach(section => section.style.display = 'none');

//     section.style.display = 'flex';
// }











// var cityInput = document.querySelector('.city-input');
// var searchBtn = document.querySelector('.search-btn');

// // Corrected selectors by adding the proper CSS class or ID notation
// var weatherInfoSection = document.querySelector('.weather-info'); // Added `.`
// var searchCitySection = document.querySelector('.city-search'); // Ensure this class exists in your HTML
// var notFoundSection = document.querySelector('.not-found'); // Ensure this class exists in your HTML

// var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814';

// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();
//     }
// });

// cityInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' && cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();
//     }
// });

// async function getFetchData(endPoint, city) {
//     var apiUrl = `http://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//     var response = await fetch(apiUrl);

//     return response.json();
// }

// async function updateWeatherInfo(city) {
//     var weatherData = await getFetchData('weather', city);

//     if (weatherData.cod != 200) {
//         showDisplaySection(notFoundSection);
//         return;
//     }

//     showDisplaySection(weatherInfoSection);
// }

// function showDisplaySection(section) {
//     [weatherInfoSection, searchCitySection, notFoundSection]
//         .forEach(sec => sec.style.display = 'none'); // Renamed inner parameter to avoid conflict

//     section.style.display = 'flex';
// }










// // Selecting the necessary elements based on provided HTML
// var cityInput = document.querySelector('.city-input');
// var searchBtn = document.querySelector('.search-btn');

// var weatherInfoSection = document.querySelector('.weather-info'); // Matches HTML structure
// var searchCitySection = document.querySelector('.search-city'); // Corrected to match your HTML
// var notFoundSection = document.querySelector('.not-found'); // Matches HTML structure

// var countryTxt = document.querySelector('.country-txt');
// var tempTxt = document.querySelector('temp-txt');
// var conditionTxt = document.querySelector('.condition-txt');
// var humidityValueTxt = document.querySelector('.humidity-value-txt');
// var windValueTxt = document.querySelector('.wind-value-txt');
// var weatherSummaryImg = document.querySelector('.weather-summary-img');
// var currentDateTxt = document.querySelector('.current-date-txt');

// var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814';

// // Event listener for the Search button
// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();
//     }
// });

// // Event listener for pressing Enter in the input field
// cityInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' && cityInput.value.trim() != '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();
//     }
// });

// // Fetch weather data from the API
// async function getFetchData(endPoint, city) {
//     var apiUrl = `http://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//     var response = await fetch(apiUrl);
//     return response.json();
// }

// // Update the weather information
// async function updateWeatherInfo(city) {
//     var weatherData = await getFetchData('weather', city);

//     if (weatherData.cod != 200) {
//         // Show "Not Found" section if API returns an error
//         showDisplaySection(notFoundSection);
//         return;
//     }

//     // // Update weather information in the weather-info section
//     // document.querySelector('.country-txt').textContent = weatherData.name;
//     // document.querySelector('.current-date-txt').textContent = new Date().toLocaleDateString('en-US', {
//     //     weekday: 'short',
//     //     day: 'numeric',
//     //     month: 'short',
//     // });
//     // document.querySelector('.temp-txt').textContent = `${Math.round(weatherData.main.temp)} °C`;
//     // document.querySelector('.condition-txt').textContent = weatherData.weather[0].main;
//     // document.querySelector('.humidity-value-txt').textContent = `${weatherData.main.humidity}%`;
//     // document.querySelector('.wind-value-txt').textContent = `${Math.round(weatherData.wind.speed)} Km/h`;
//     console.log(weatherData);

//     var {
//         name: country,
//         main: { temp, humidity },
//         weather: [{ id, main }],
//         wind: {speed}
//     } = weatherData

//     countryTxt.textContent = country;
//     tempTxt.textContent = temp + ' °C';

//     showDisplaySection(weatherInfoSection);
// }

// // Show the selected section and hide others
// function showDisplaySection(section) {
//     [weatherInfoSection, searchCitySection, notFoundSection].forEach((sec) => {
//         sec.style.display = 'none'; // Hide all sections
//     });
//     section.style.display = 'flex'; // Show the selected section
// }













// // Selecting the necessary elements based on provided HTML
// var cityInput = document.querySelector('.city-input');
// var searchBtn = document.querySelector('.search-btn');

// var weatherInfoSection = document.querySelector('.weather-info'); // Matches HTML structure
// var searchCitySection = document.querySelector('.search-city'); // Corrected to match your HTML
// var notFoundSection = document.querySelector('.not-found'); // Matches HTML structure

// var countryTxt = document.querySelector('.country-txt');
// var tempTxt = document.querySelector('.temp-txt'); // Corrected selector
// var conditionTxt = document.querySelector('.condition-txt');
// var humidityValueTxt = document.querySelector('.humidity-value-txt');
// var windValueTxt = document.querySelector('.wind-value-txt');
// var weatherSummaryImg = document.querySelector('.weather-summary-img');
// var currentDateTxt = document.querySelector('.current-date-txt');

// var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814';

// // Event listener for the Search button
// searchBtn.addEventListener('click', () => {
//     if (cityInput.value.trim() !== '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();
//     }
// });

// // Event listener for pressing Enter in the input field
// cityInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter' && cityInput.value.trim() !== '') {
//         updateWeatherInfo(cityInput.value);
//         cityInput.value = '';
//         cityInput.blur();
//     }
// });

// // Fetch weather data from the API
// async function getFetchData(endPoint, city) {
//     var response = await fetch(`https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`);
//     return response.json();
// }


// // function getWeatherIcon(id){
// //     if(id <= )
// // }

// // Update the weather information
// async function updateWeatherInfo(city) {
//     try {
//         var weatherData = await getFetchData('weather', city);

//         if (weatherData.cod !== 200) {
//             // Show "Not Found" section if API returns an error
//             showDisplaySection(notFoundSection);
//             return;
//         }

//         console.log(weatherData);

//         // Destructuring weather data
//         var {
//             name: country,
//             main: { temp, humidity },
//             weather: [{ id, main }],
//             wind: { speed }
//         } = weatherData;

//         // Updating DOM elements
//         countryTxt.textContent = country;
//         tempTxt.textContent = Math.round(temp) + ' °C';
//         conditionTxt.textContent = main;
//         humidityValueTxt.textContent = humidity + '%';
//         windValueTxt.textContent = speed + ' Km/h';

//         // Show the weather info section
//         showDisplaySection(weatherInfoSection);
//     } catch (error) {
//         console.error('Error:', error.message);
//         showDisplaySection(notFoundSection); // Show "Not Found" section on error
//     }
// }


// // async function updateWeatherInfo(city) {
// //     // Fetch weather data from API
// //     var weatherData = await getFetchData('weather', city);

// //     // Handle error response (e.g., city not found)
// //     if (!weatherData || weatherData.cod != 200) {
// //         showDisplaySection(notFoundSection); // Show "Not Found" section
// //         return;
// //     }

// //     console.log(weatherData);

// //     // Destructure weather data
// //     var {
// //         name: country,
// //         main: { temp, humidity },
// //         weather: [{ id, main }],
// //         wind: { speed }
// //     } = weatherData;

// //     // Update DOM elements
// //     countryTxt.textContent = country;
// //     tempTxt.textContent = Math.round(temp) + ' °C';
// //     conditionTxt.textContent = main;
// //     humidityValueTxt.textContent = humidity + '%';
// //     windValueTxt.textContent = speed + ' Km/h';

// //     weatherSummaryImg.src = `assets/${getWeatherIcon(id)}`
// //     // Show the weather info section
// //     showDisplaySection(weatherInfoSection);
// // }

// // Show the selected section and hide others
// function showDisplaySection(section) {
//     [weatherInfoSection, searchCitySection, notFoundSection].forEach((sec) => {
//         sec.style.display = 'none'; // Hide all sections
//     });
//     section.style.display = 'flex'; // Show the selected section
// }
















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

var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814';

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


// // Get weather icon based on weather ID
// function getWeatherIcon(id, isNight) {
//     if (id >= 200 && id < 300) return 'weather-assets/thunderstorm.png'; // Remaining range for thunderstorms
//     if (id >= 300 && id < 500) return 'weather-assets/drizzle.png';
//     if (id >= 500 && id < 600) return 'weather-assets/rain.png';
//     if (id >= 600 && id < 700) return 'weather-assets/snow.png';
//     if (id >= 700 && id < 800) return 'weather-assets/atmosphere.png';
//     // if (id === 800) return 'clear-sky-day.png';
//     if (id === 800) return isNight ? 'weather-assets/clear-sky-night.png' : 'weather-assets/clear-sky-day.png';

//     // if (id === 801) return 'few clouds.png';
//     if (id === 801) return isNight ? 'weather-assets/few-clouds-night.png' : 'weather-assets/few-clouds-day.png';
//     if (id === 802) return 'weather-assets/scattered-clouds.png';
//     // if (id === 803) return 'broken-clouds-day.png';
//     if (id === 803) return isNight ? 'weather-assets/broken-clouds-night.png' : 'weather-assets/broken-clouds-day.png';
//     if (id === 804) return 'weather-assets/scattered-clouds.png';
//     else return 'weather-assets/broken-clouds-day.png'; // Fallback icon
// }



// // // Update the weather information
// // async function updateWeatherInfo(city) {
// //     var weatherData = await getFetchData('weather', city);

// //     if (!weatherData || weatherData.cod != 200) {
// //         // Show "Not Found" section if API returns an error
// //         showDisplaySection(notFoundSection);
// //         return;
// //     }

// //     console.log(weatherData);

// //     // Destructure and update weather information in the weather-info section
// //     var {
// //         name: country,
// //         main: { temp, humidity },
// //         weather: [{ id, main }],
// //         wind: { speed },
// //     } = weatherData;

// //     countryTxt.textContent = country;
// //     tempTxt.textContent = `${Math.round(temp)} °C`;
// //     conditionTxt.textContent = main;
// //     humidityValueTxt.textContent = `${humidity}%`;
// //     windValueTxt.textContent = `${Math.round(speed)} Km/h`;
// //     currentDateTxt.textContent = new Date().toLocaleDateString('en-US', {
// //         weekday: 'short',
// //         day: 'numeric',
// //         month: 'short',
// //     });

// //     weatherSummaryImg.src = `assets/${getWeatherIcon(id)}`; // Update the weather icon

// //     showDisplaySection(weatherInfoSection);
// // }



// // Update the weather information
// async function updateWeatherInfo(city) {
//     var weatherData = await getFetchData('weather', city);

//     if (!weatherData || weatherData.cod != 200) {
//         // Clear previous data
//         countryTxt.textContent = '';
//         tempTxt.textContent = '';
//         conditionTxt.textContent = '';
//         humidityValueTxt.textContent = '';
//         windValueTxt.textContent = '';
//         weatherSummaryImg.src = '';
//         currentDateTxt.textContent = '';
//         // Show "Not Found" section
//         showDisplaySection(notFoundSection);
//         return;
//     }

//     console.log(weatherData);

//     // Destructure and update weather information in the weather-info section
//     var {
//         name: country,
//         main: { temp, humidity },
//         weather: [{ id, main }],
//         wind: { speed },
//         sys: { sunrise, sunset },
//     } = weatherData;

//     const currentTime = new Date().getTime() / 1000; // Current time in seconds
//     const isNight = currentTime < sunrise || currentTime > sunset;

//     countryTxt.textContent = country;
//     tempTxt.textContent = `${Math.round(temp)} °C`;
//     conditionTxt.textContent = main;
//     humidityValueTxt.textContent = `${humidity}%`;
//     windValueTxt.textContent = `${Math.round(speed)} Km/h`;
//     currentDateTxt.textContent = new Date().toLocaleDateString('en-US', {
//         weekday: 'short',
//         day: 'numeric',
//         month: 'short',
//     });

//     weatherSummaryImg.src = `assets/${getWeatherIcon(id, isNight)}`; // Update the weather icon

//     showDisplaySection(weatherInfoSection);
// }



// Get weather icon based on weather ID
function getWeatherIcon(id, isNight) {
    if (id >= 200 && id < 300) return 'weather-assets/thunderstorm.png';
    if (id >= 300 && id < 500) return 'weather-assets/drizzle.png';
    if (id >= 500 && id < 600) return 'weather-assets/rain.png';
    if (id >= 600 && id < 700) return 'weather-assets/snow.png';
    if (id >= 700 && id < 800) return 'weather-assets/atmosphere.png';
    if (id === 800) return isNight ? 'weather-assets/clear-sky-night.png' : 'weather-assets/clear-sky-day.png';
    if (id === 801) return isNight ? 'weather-assets/few-clouds-night.png' : 'weather-assets/few-clouds-day.png';
    if (id === 802) return 'weather-assets/scattered-clouds.png';
    if (id === 803) return isNight ? 'weather-assets/broken-clouds-night.png' : 'weather-assets/broken-clouds-day.png';
    if (id === 804) return 'weather-assets/overcast-clouds.png';
    else return 'weather-assets/few-clouds-day.png'; // Fallback icon
}

// Update the weather information
async function updateWeatherInfo(city) {
    var weatherData = await getFetchData('weather', city);

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
        return;
    }

    console.log(weatherData);

    // Destructure and update weather information
    var {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed },
        sys: { sunrise, sunset },
    } = weatherData;

    const currentTime = new Date().getTime() / 1000; // Current time in seconds
    const isNight = currentTime < sunrise || currentTime > sunset;

    countryTxt.textContent = country;
    tempTxt.textContent = `${Math.round(temp)} °C`;
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = `${humidity}%`;
    windValueTxt.textContent = `${Math.round(speed)} Km/h`;
    currentDateTxt.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });

    // Corrected the path to weather icons
    weatherSummaryImg.src = getWeatherIcon(id, isNight);
    // Dynamically set the size of the image
    weatherSummaryImg.style.width = '120px';
    weatherSummaryImg.style.height = '90px';
    weatherSummaryImg.style.objectFit = 'contain';

    showDisplaySection(weatherInfoSection);
}


// Show the selected section and hide others
function showDisplaySection(section) {
    [weatherInfoSection, searchCitySection, notFoundSection].forEach((sec) => {
        sec.style.display = 'none'; // Hide all sections
    });
    section.style.display = 'flex'; // Show the selected section
}
