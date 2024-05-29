import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Today from '../pages/Today';
import Tomorrow from '../pages/Tomorrow';
import FiveDayForecast from '../pages/FiveDayForecast';
import './forecast.css';
import { NavLink } from 'react-router-dom';
import '../components/utility.css'


const Forecast = () => {


 


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
            to="/forecast"
            style={
              ({ isActive }) => ({
              color: isActive
                ? "white"
                : "#818085",
                textDecoration:'none'
                
            })
            }
          >
            5-Day Forecast
          </NavLink>
          
          </div>
        </div>

        <div className='content'>
        <Routes>
        <Route path = '/' element = {<Today />}/>
        <Route path = '/tomorrow' element = {<Tomorrow/>}/>
        <Route path = '/forecast' element = {<FiveDayForecast/>}/>
      </Routes>
        </div>

      </div>
    </div>
  )
}

export default Forecast
