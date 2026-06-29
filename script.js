
const submit = document.getElementById('submit-btn').addEventListener('click', function(){
  console.log("Button clicked");
 const cityName = document.getElementById('city-input').value;
 if(cityName === ""){
  console.log("ERORR !! , type valid cityName");
  return;
 }
 fetchCity(cityName);
 });
  async function fetchCity(cityName) {
  try{
    const url = `https://api.weatherapi.com/v1/current.json?key=c09ecbe69ab24db1b4c100346262906&q=${cityName}`;
    const response = await fetch(url);
    const data = await response.json();
    const condition = data.current.condition.text.toLowerCase();
    if(condition.includes("sunny")){
    document.getElementById('weather-icon').innerText = "☀️";
}
else if(condition.includes("thunder")){
    document.getElementById('weather-icon').innerText = "⛈️";
}
else if(condition.includes("rain")){
    document.getElementById('weather-icon').innerText = "🌧️";
}
else if(condition.includes("cloud")){
    document.getElementById('weather-icon').innerText = "☁️";
}
else{
    document.getElementById('weather-icon').innerText = "🌤️";
}
  document.getElementById('city').innerText =
  data.location.name + ", " + data.location.country;
    document.getElementById('current-temp').innerText = data.current.temp_c + "°C";
   document.getElementById('humid-percent').innerText =
  data.current.humidity + "%";

document.getElementById('wind-speed').innerText =
  data.current.wind_kph + " km/h";

document.getElementById('visible-type').innerText =
  data.current.vis_km + " km";

document.getElementById('temp-type').innerText = data.current.condition.text;
  
  const today = new Date();
document.getElementById('day').innerText = today.toDateString();
  }
  
 catch(error){
   console.log(error);
 }
 }
 
 