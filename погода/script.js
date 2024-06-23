// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
// const APIKey = '3aae3a36af36ad795158a8fae4ae223a';

// const citySelect = document.getElementById('city');
// const outputDiv = document.querySelector('.out');
// const weatherIconDiv = document.querySelector('.weather-icon');

// document.addEventListener('DOMContentLoaded', () => {
//     getWeather(citySelect.value);
// });

// citySelect.addEventListener('change', () => {
//     getWeather(citySelect.value);
// });

// function getWeather(cityId) {
//     const cityRequest = `${BASE_URL}?id=${cityId}&appid=${APIKey}&units=metric`;

//     fetch(cityRequest)
//     .then(response => response.json())
//     .then(data => {
//         outputDiv.innerHTML = `
//             <p>City: ${data.name}</p>
//             <p>Temperature: ${data.main.temp} °C</p>
//             <p>Weather: ${data.weather[0].description}</p>
//         `;

//         weatherIconDiv.innerHTML = `
//             <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='Weather icon' />
//         `;
//     })
//     .catch(error => console.error('Error:', error));
// }



const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const APIKey = '3aae3a36af36ad795158a8fae4ae223a';

const cities = [
    { id: 2643743, name: 'London' },
    { id: 625144, name: 'Minsk' },
    { id: 3099434, name: 'Gdansk' },
    { id: 703448, name: 'Kyiv' },
    { id: 618426, name: 'Chișinău' }
];

const citySelect = document.getElementById('city');
const outputDiv = document.querySelector('.out');
const weatherIconDiv = document.querySelector('.weather-icon');

// Populate the select element with cities
cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city.id;
    option.textContent = city.name;
    citySelect.appendChild(option);
});

document.addEventListener('DOMContentLoaded', () => {
    getWeather(citySelect.value);
});

citySelect.addEventListener('change', () => {
    getWeather(citySelect.value);
});

function getWeather(cityId) {
    const cityRequest = `${BASE_URL}?id=${cityId}&appid=${APIKey}&units=metric`;

    fetch(cityRequest)
    .then(response => response.json())
    .then(data => {
        showWeather(data);
    })
    .catch(error => console.error('Error:', error));
}

function showWeather(data) {
    outputDiv.innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind direction: ${data.wind.deg}°</p>
        <p>Wind speed: ${data.wind.speed} m/s</p>
        <p>Pressure: ${data.main.pressure} hPa</p>
    `;

    weatherIconDiv.innerHTML = `
        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='Weather icon' />
    `;
}
