import React from 'react'
import './today.css';
import '../components/utility.css';
import { weatherList } from '../utility/dataUtlis';

const FiveDayForecast = ({data}) => {
  const forecastInfo = {};


  return (
    <div className='todayForecast'>
    <div className='todayContent'>



        {data && 
            (
                

                data.hour.map((item, index) => {
                const icon = weatherList.find((icon) => icon.code === item.condition.code);
                if (icon) {
                    forecastInfo.icon = item.isday ? icon.day : icon.night;
                } else {
                    forecastInfo.icon = 'default-icon'; // or some other default icon
                }

                const time = (()=> 
                    {
                        let setTime  = item.time.split(' ') 
                        return setTime[1];
                    }
                )

                return (

                  
                  // forecastInfo.time = 
                    <div className='forecastItem' key={index}>
                        <div className='forecastItem__time'>{ time()}</div>
                        <div className='forecastItem__temp'>{item.temp_c}</div>
                        <div className='forecastItem__icon'>
                            {forecastInfo.icon}
                        </div>
                    </div>
                )
            })
            )
        }






    </div>


</div>
  )
}

export default FiveDayForecast

