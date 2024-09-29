
      const apiKey = "0123a8e24c5423bb6c15581bad21c94f";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox =document.querySelector('.cityName');
      const searchBtn =document.querySelector('.searchBtn');
      const weatherIcon = document.querySelector('.weatherIcon');
      
      searchBox.addEventListener("keypress", (e)=> {
        if (e.key === "Enter") 
        {
            handleEnterClick();
        }
      })

      searchBtn.addEventListener("click", ()=> {
        handleEnterClick();
      })

      function handleEnterClick ()
      {
        {    
            if (searchBox.value == "")
            {
                alert("Please Enter the City Name");
            } else 
            {
                checkWeather(searchBox.value);
            }
            searchBox.value = "";
        }
      }

      async function checkWeather(city) {
        if (!city)
        {
            city = 'lahore';
        }
          const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
          var data = await response.json();
        

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidityS').innerHTML = data.main.humidity + "%";
        document.querySelector('.windS').innerHTML = data.wind.speed + " km/hr";

        console.log(data.weather[0].main);

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist" || "Smoke" || "Haze")
        {
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Snow")
        {
            weatherIcon.src = "snow.png";
        }  
      }

      checkWeather();