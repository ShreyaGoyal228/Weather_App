const inputBox=document.querySelector('.search-box');
const searchBtn=document.getElementById('search-btn');
const weather_img=document.querySelector('.weather-img');
const temper=document.querySelector('.temp');
const description=document.querySelector('.text');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind');
const loc_not_found=document.querySelector('.loc-not-found');
const weather_body=document.querySelector('.weather-div');

async function myFunction(city)
{
    const api_key="1494bd0f647eb0dd20ef119eff40285e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

     const weather_data= await fetch(`${url}`).then(response=>response.json());
     if(weather_data.cod === '404')
     {
         loc_not_found.style.display = 'flex';
         weather_body.style.display= "none";

        console.log('error');
        return;
     }
     else{
        loc_not_found.style.display = 'none';
         weather_body.style.display= "flex";
     }
     temper.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
     description.innerHTML=`${weather_data.weather[0].description}`;
     humidity.innerHTML=`${weather_data.main.humidity}%`;
     wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

     switch(weather_data.weather[0].main)
     {
        case 'Clear' :
            weather_img.src="pics/clear.png";
            break;
        case 'Clouds' :
            weather_img.src="pics/cloud.png";
            break;
        case 'Mist' :
            weather_img.src="pics/mist.png";
            break; 
        case 'Rain' :
            weather_img.src="pics/rain.png";
            break;
        case 'Snow' :
            weather_img.src="pics/snow.png";
            break;
     }

     console.log(weather_data);
}

searchBtn.addEventListener('click',()=>{
    myFunction(inputBox.value);
})



