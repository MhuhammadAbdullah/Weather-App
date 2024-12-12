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













// Selecting the necessary elements based on provided HTML
var cityInput = document.querySelector('.city-input');
var searchBtn = document.querySelector('.search-btn');

var weatherInfoSection = document.querySelector('.weather-info'); // Matches HTML structure
var searchCitySection = document.querySelector('.search-city'); // Corrected to match your HTML
var notFoundSection = document.querySelector('.not-found'); // Matches HTML structure

var countryTxt = document.querySelector('.country-txt');
var tempTxt = document.querySelector('.temp-txt'); // Corrected selector
var conditionTxt = document.querySelector('.condition-txt');
var humidityValueTxt = document.querySelector('.humidity-value-txt');
var windValueTxt = document.querySelector('.wind-value-txt');
var weatherSummaryImg = document.querySelector('.weather-summary-img');
var currentDateTxt = document.querySelector('.current-date-txt');

var apiKey = 'c463ee4e1a5b11e96cb8c7d900a05814';

// Event listener for the Search button
searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

// Event listener for pressing Enter in the input field
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && cityInput.value.trim() !== '') {
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }
});

// Fetch weather data from the API
async function getFetchData(endPoint, city) {
    var response = await fetch(`https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`);
    return response.json();
}


// function getWeatherIcon(id){
//     if(id <= )
// }

// Update the weather information
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
async function updateWeatherInfo(city) {
    // Fetch weather data from API
    var weatherData = await getFetchData('weather', city);

    // Handle error response (e.g., city not found)
    if (!weatherData || weatherData.cod != 200) {
        showDisplaySection(notFoundSection); // Show "Not Found" section
        return;
    }

    console.log(weatherData);

    // Destructure weather data
    var {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData;

    // Update DOM elements
    countryTxt.textContent = country;
    tempTxt.textContent = Math.round(temp) + ' °C';
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = humidity + '%';
    windValueTxt.textContent = speed + ' Km/h';

    weatherSummaryImg.src = `assets/${getWeatherIcon(id)}`
    // Show the weather info section
    showDisplaySection(weatherInfoSection);
}

// Show the selected section and hide others
function showDisplaySection(section) {
    [weatherInfoSection, searchCitySection, notFoundSection].forEach((sec) => {
        sec.style.display = 'none'; // Hide all sections
    });
    section.style.display = 'flex'; // Show the selected section
}
