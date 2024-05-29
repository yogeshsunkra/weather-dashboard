import React from 'react'
import './index.css'
import Navbar from './components/Navbar';
import WeathertReport from './components/WeathertReport';
import Forecast from "./components/Forecast";
import { currentWeather , weatherInfo } from './api/apiCalling'; 
import { BrowserRouter} from 'react-router-dom';
import { useEffect , useState} from 'react';

const App = () => {

  const [weather ,setWeather] = useState(); 
  const [currentWeather ,setCurrentWeather] = useState(); 
  const [loading ,setLoading] = useState(false); 
  const [error ,setError] = useState(false); 
  const [latitude,setLatitude] = useState(); 
  const [longitude ,setLongitude] = useState();



  useEffect(()=>{
    if(navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition((position)=>{

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        console.log("Location Gps")
      })
  }
else{
  console.log("Location not supported");
}},[])
  

// console.log("latitude",latitude);
// console.log("longitude",longitude);

  useEffect(()=>{

    if(latitude !== undefined && longitude !== undefined){
      console.log("Fetching")
      //  currentWeather(latitude,longitude).then(response => setWeather(response) ,setError(false),setLoading(false)) 
      //  .catch(error => setError(true,error)) 


       weatherInfo(latitude,longitude)
       .then(response => setWeather(response) ,setError(false),setLoading(false))
       .catch(error => setError(true,error)) ;
    }
    
  },[latitude,longitude])


  // console.log("weather" ,weather)
  // console.log("forecast",forecast)

  return (
    <BrowserRouter>
    <div className='mainContainer'>
      
      <Navbar/>

      <div className='container'>
      <WeathertReport/>
      
      <Forecast />
      </div>
    

    </div>
    </BrowserRouter>
  )
}

export default App

