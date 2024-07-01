import React from 'react'
import './weatherReport.css';
import './utility.css';
import { weatherList } from '../utility/dataUtlis';

const WeathertReport = ({weatherInfo}) => {

  const weather = {};

  const weatherCondition =(()=>{
     weatherList.find((icon)=>icon.code === weather.code ? 
    weather.icon =  weather.isDay ? icon.day : icon.night
     :console.log("error")) ;
  })




  if(weatherInfo){

    // const weatherIcon ;
    weather.temp = weatherInfo.current.temp_c;
    weather.code = weatherInfo.current.condition.code;
    weather.isDay = weatherInfo.current.is_day;
    weather.condition = weatherInfo.current.condition.text;
    weather.feelsLike = weatherInfo.current.feelslike_c;
    weather.visibility = weatherInfo.current.vis_km;
    weather.windSpeed = weatherInfo.current.wind_kph;
    weather.windDir = weatherInfo.current.wind_dir;
    weather.windDeg = weatherInfo.current.wind_degree;
    weather.uv = weatherInfo.current.uv;
    weather.pressure = weatherInfo.current.pressure;
    weather.humidity = weatherInfo.current.humidity;


    weather.city = weatherInfo.location.name;
    weather.country = weatherInfo.location.country;


    weather.maxTemp = weatherInfo.forecast.forecastday[0].day.maxtemp_c;
    weather.minTemp = weatherInfo.forecast.forecastday[0].day.mintemp_c;
    weather.rainChances =  weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain;

    //Astro
    weather.sunrise = weatherInfo.forecast.forecastday[0].astro.sunrise;
    weather.sunset = weatherInfo.forecast.forecastday[0].astro.sunset;
    weather.moonrise = weatherInfo.forecast.forecastday[0].astro.moonrise;
    weather.moonset = weatherInfo.forecast.forecastday[0].astro.moonset;
    
    // console.log(weather.temp);


    weatherCondition();



    
    // console.log("ICON" , icon);
  }


  return (
    <div className='weatherContainer'>

<div className='weather flex '>

<div className='weatherHeader flex center'>

<div className='location text-sm font-200 color-lt'>{weather.city + '/' + weather.country}</div>
<div className='time text-sm font-200 color-lt'>04:50</div>

</div>
<div className='weatherBody flex center'>
  <div className='weatherIcon '> {weather.icon}</div>
  <div className='weatherTemp text-xl font-700 color'>{weather.temp}</div>
  <div className='weatherCondition text-sm font-300 color-md'>{weather.condition} </div>
</div>
<div className='weatherFooter flex center'>
  <div className='text-sm font-400 color-lt'>{weather.feelsLike}</div>
  <div className='text-sm font-400 color-lt'>Something</div>
</div>


 
 
 

 
  
 


</div>

      <div className='weatherInformation'>
        
        <div className='infoCards'></div>
        <div className='infoCards'></div>
        <div className='infoCards'></div>
        <div className='infoCards'></div>
      </div>
    </div>


  )
}

export default WeathertReport
