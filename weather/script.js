const inputBox = document.querySelector("#inputBox");
const searchBtn = document.querySelector("#searchBtn");


const apiKey = "494077f10b8653ba4a369fc64f00acab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function weatherCheck(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".details").style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h ';   
        
        document.querySelector(".details").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }
  
}
searchBtn.addEventListener("click", ()=>{
    weatherCheck(inputBox.value);
})