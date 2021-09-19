window.addEventListener("load", ()=>{
    let long;
    let lat;
    let locationTimezone = document.querySelector(".location-timezone");
    let temperature = document.querySelector(".temperature-degree");
    let description = document.querySelector(".description-text");
    let moreDescription = document.querySelector(".more-description-text");
    const temperatureDegree = document.querySelector(".temperature-degree");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            // console.log(position);  Console your locations
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // Const API

            // const api = "6d055e39ee237af35ca066f35474e9df";

            // Proxy
            const proxy = 'http://cros-anywhere.herokuapp.com/';

            // API Url
           const api =
           `${proxy}http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
           `lon=${long}&appid=6d055e39ee237af35ca066f35474e9df`;

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);   
                    temperatureDegree.textContent = Math.floor(data.main.temp - 273);
                    locationTimezone.textContent = data.name + ", " + data.sys.country; 
                    description.textContent = data.weather[0].main;
                    moreDescription.textContent = data.weather[0].description;
                })  
        });
    }
})


