import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
 const INIT_URL ="https://images.unsplash.com/photo-1641970304088-2b016b4a883b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3QlMjBzdG9ybXxlbnwwfHwwfHx8MA%3D%3D";   
  const HOT_URL="https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/images/methode/2021/06/29/56cd1030-d8b7-11eb-8921-c363d46ef7af_image_hires_165612.jpg?itok=ZKlNnYQs&v=1624956981";
  const COLD_URL="https://i0.wp.com/picjumbo.com/wp-content/uploads/cute-snowman-in-winter-hat-free-photo.jpg?w=600&quality=80"; 
   const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return(
        <div className="InfoBox">
  <div className="cardContainer"> 
      <Card sx={{ MaxWidth: 800 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={info.humidity > 80 ? RAIN_URL:info.temp>15?HOT_URL:COLD_URL} //logic for changing image based upon humidity and temperature
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.black',fontWeight:"bold"}} component={"span"}> 
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The Weather can be described as <i>{info.weather}</i> feels Like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>  
        </div>
    )
}