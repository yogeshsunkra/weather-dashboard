import React from 'react'
import './weatherReport.css';
import './utility.css';
import { weatherList } from '../utility/dataUtlis';
import { ReactComponent as Sunrise } from '../assets/weatherIcons/sunrise.svg';
import { ReactComponent as Moonrise } from '../assets/weatherIcons/moonrise.svg';
import { ReactComponent as Wind } from '../assets/weatherIcons/wind.svg';
import { ReactComponent as Humidity } from '../assets/weatherIcons/humidity.svg';


const WeathertReport = ({ weatherInfo }) => {

  const weather = {};

  const weatherCondition = (() => {
    weatherList.find((icon) => icon.code === weather.code ?
      weather.icon = weather.isDay ? icon.day : icon.night
      : console.log("error"));
  })




  if (weatherInfo) {

    // const weatherIcon ;
    weather.temp = Math.floor(weatherInfo.current.temp_c);
    weather.code = weatherInfo.current.condition.code;
    weather.isDay = weatherInfo.current.is_day;
    weather.condition = weatherInfo.current.condition.text;
    weather.feelsLike = Math.floor(weatherInfo.current.feelslike_c);
    weather.visibility = weatherInfo.current.vis_km;
    weather.windSpeed = weatherInfo.current.wind_kph;
    weather.windDir = weatherInfo.current.wind_dir;
    weather.windDeg = weatherInfo.current.wind_degree;
    weather.uv = weatherInfo.current.uv;
    weather.pressure = weatherInfo.current.pressure;
    weather.humidity = weatherInfo.current.humidity;


    weather.city = weatherInfo.location.name;
    weather.country = weatherInfo.location.country;


    weather.maxTemp = Math.floor(weatherInfo.forecast.forecastday[0].day.maxtemp_c);
    weather.minTemp = Math.floor(weatherInfo.forecast.forecastday[0].day.mintemp_c);
    weather.rainChances = weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain;

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
          <div className='time text-sm font-200 color-lt'>04:50 PM</div>

        </div>
        <div className='weatherBody flex center'>
          <div className='weatherIcon '> {weather.icon}</div>
          <div className='weatherTemp text-xl font-500 color'>{weather.temp}</div>

        </div>
        <div className='weatherFooter flex center'>
          <div className='text-md font-500 color-md'>Feels like {weather.feelsLike} </div>
          <div className='text-md font-500 color-md'>{weather.condition}</div>
        </div>



      </div>





      <div className='weatherInformation'>

        <div className='infoCards flex'>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Sunrise</div>
            <div className='text-sm font-400 color-lt'>{weather.sunrise}</div>
          </div>

          <div className='logo'><Sunrise/></div>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Sunset</div>
            <div className='text-sm font-400 color-lt'>{weather.sunset}</div>
          </div>
        </div>


        <div className='infoCards flex'>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Moonrise</div>
            <div className='text-sm font-400 color-lt'>{weather.moonrise}</div>
          </div>

          <div className='logo'><Moonrise/></div>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Moonset</div>
            <div className='text-sm font-400 color-lt'>{weather.moonset}</div>
          </div>

        </div>




        <div className='infoCards'>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Wind Direction</div>
            <div className='text-sm font-400 color-lt'> {weather.windDeg} degree / {weather.windDir} </div>
          </div>

          <div className='logo'><Wind/></div>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'> Wind Speed </div>
            <div className='text-sm font-400 color-lt'>{weather.windSpeed} km/h</div>
          </div>

        </div>


        <div className='infoCards'>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Humidity</div>
            <div className='text-sm font-400 color-lt'>{weather.humidity}%</div>
          </div>

          <div className='logo'><Humidity/></div>

          <div className='subInfo flex'>
            <div className='text-sm font-400 color-lt'>Chance of Rain</div>
            <div className='text-sm font-400 color-lt'> {weather.rainChances}%</div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default WeathertReport
