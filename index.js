const apikey ="a176b4c1f9bff7e67e564c89e26b140c";
const weatherDataE1 =document.getElementById("weather-data");
const cityInputE1 =document.getElementById("city-input");
const formE1 =document.querySelector("form");

formE1.addEventListener("submit",(event)=>
{
    event.preventDefault(event);
    const cityValue = cityInputE1.value;
    console.log(cityValue);
    gettWeatherData(cityValue);
});
async function gettWeatherData(cityValue){
    try {
        const response =await fetch(`http://api.openweatherapp.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
        const data= await response.json();
        console.log(data);

        const temperature =Math.round(data,main.temp);
        const description =data.weather[0].description;
        const icon  =data.weather[0].icon;
        const details =[
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `humidity: ${data.main.humidity}`,
            `Wind speed: ${data.wind.speed}`
        ]

        weatherDataE1.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png alt="weather icon" srcset="">`;
        weatherDataE1.querySelector(".temperature").textContent=`${temperature}°C`;
        weatherDataE1.querySelector(".description").textContent=`${description}`;

        weatherDataE1.querySelector(".details").innerHTML=details.map((e)=>`<div>{e}</div>`).join("");



    } catch (error) {weatherDataE1.querySelector(".icon").innerHTML="";
    weatherDataE1.querySelector(".temperature").textContent="";
    weatherDataE1.querySelector(".description").textContent="Error happen, Please try again";

    weatherDataE1.querySelector(".details").innerHTML="";
        
    }
}