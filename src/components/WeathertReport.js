import React from 'react'
import './weatherReport.css';
import { weatherList } from '../utility/dataUtlis';

const WeathertReport = ({weatherInfo}) => {

  const weather = {};






  if(weatherInfo){

    weather.temp = weatherInfo.current.temp_c;
    
    console.log(weather.temp);
  }


  return (
    <div className='weatherContainer'>

<div className='weather'>
 {weather.temp};
 
 
  {weatherList.map((icon)=> icon.day)}
 


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
