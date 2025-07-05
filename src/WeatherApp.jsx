import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
city: "Delhi",
feelsLike: 42.95,
humidity: 55,
temp: 35.95,
tempMax: 35.95,
tempMin : 35.95, 
weather: "broken clouds"    
    });
let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
}
  return(
   <div style={{textAlign:"center"}}>
    <div style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",fontSize:"35px",fontWeight:"bold"}}>Weather App</div>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
   </div> 
  )  
}