import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Today from '../pages/Today';
import Tomorrow from '../pages/Tomorrow';
import FiveDayForecast from '../pages/FiveDayForecast';
import './forecast.css';
import { NavLink } from 'react-router-dom';
import '../components/utility.css'


const Forecast = ({weatherInfo}) => {

  const date = new Date();
  date.setDate(date.getDate() + 2);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const thirdDay = weekday[date.getDay()];
  

    const forecastReport = [];

    if(weatherInfo){
      forecastReport.today = weatherInfo.forecast.forecastday[0];
      forecastReport.tommorrow = weatherInfo.forecast.forecastday[1];
      forecastReport.dayAfterTommorrow = weatherInfo.forecast.forecastday[2];


      console.log("forecast",forecastReport.today);
    }




  return (
    <div className='forecastContainer'>

      <div className='forecastContent '>

        <div className='navbar'>
          
        <div className='text-md font-500 menuBtn'>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive
                ? "white"
                : "#818085",
                textDecoration:'none'
            })}
          >
            Today
          </NavLink>
        </div>
        <div className='text-md font-400 menuBtn'>
        <NavLink
            to="/tomorrow"
            style={({ isActive }) => ({
              color: isActive
                ? "white"
                : "#818085",
                textDecoration:'none'
            })}
          >
            Tommorow
          </NavLink>
          </div>
        <div className='text-md font-400 menuBtn' >
          
          <NavLink
            to={`/forecast/${date}`}
            style={
              ({ isActive }) => ({
              color: isActive
                ? "white"
                : "#818085",
                textDecoration:'none'
                
            })
            }
          >
            {thirdDay}
          </NavLink>
          
          </div>
        </div>

        <div className='content'>
        <Routes>
        <Route path = '/' element = {<Today data ={forecastReport.today} />}/>
        <Route path = '/tomorrow' element = {<Tomorrow data = {forecastReport.tommorrow}/>}/>
        <Route path = '/forecast/*' element = {<FiveDayForecast data = {forecastReport.dayAfterTommorrow}/>}/>
      </Routes>
        </div>

      </div>
    </div>
  )
}

export default Forecast
