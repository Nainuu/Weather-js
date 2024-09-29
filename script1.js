
const apiKey = "0123a8e24c5423bb6c15581bad21c94f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector('.cityName');
const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener("click" , () => {
    if (cityName.value == '')
    {
        alert('Enter a city Name to see the temperature');
    }
    else {
        checkWeather(cityName.value);
    }
    cityName.value = "";
})
var city = "";
async function checkWeather(city) {
    if (!city)
    {
        city= "lahore";
    }
    else {
        const response = await fetch(apiUrl + city + `&appid${apiKey}`);
        var data = await response.json();


        console.log(data);
    }
    
}
checkWeather(city)