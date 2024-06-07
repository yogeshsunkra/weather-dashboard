import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import WeathertReport from './components/WeathertReport';
import Forecast from "./components/Forecast";
import { currentWeather, weatherInfo } from './api/apiCalling';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {

  const [weather, setWeather] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();



//Locate the coordinates only on initial render
  useEffect(() => {

    console.log("New Render");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        console.log("Location Gps")
      })
    }
    else {
      console.log("Location not supported");
    }
  }, [])

  //Fetches data if latitude and longitude changes

  useEffect(() => {

    if (latitude !== undefined && longitude !== undefined) {
      console.log("Fetching")


      weatherInfo(latitude, longitude)
        .then(response => setWeather(response), setError(false), setLoading(false))
        .catch(error => setError(true, error));
    }

  }, [latitude, longitude])


  const handleSearch = (lat, lon) => {
    if (lat !== undefined || lon !== undefined) {
      setLatitude(lat);
      setLongitude(lon)
    }

  }

  return (
    <BrowserRouter>
      <div className='mainContainer'>

        <Navbar handleSearch={handleSearch} />

        <div className='container'>
          <WeathertReport weatherInfo={weather} />

          <Forecast />
        </div>


      </div>
    </BrowserRouter>
  )
}

export default App

