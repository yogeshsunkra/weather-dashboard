import React from 'react'
import './today.css';
import '../components/utility.css';
import { weatherList } from '../utility/dataUtlis';

const Tomorrow = ({data}) => {


  const forcastInfo = {};


  return (
    <div className='todayForecast'>
    <div className='todayContent'>



        {data && 
            (
                

                data.hour.map((item, index) => {
                const icon = weatherList.find((icon) => icon.code === item.condition.code);
                if (icon) {
                    forcastInfo.icon = item.isday ? icon.day : icon.night;
                } else {
                    forcastInfo.icon = 'default-icon'; // or some other default icon
                }


                const time = (()=> 
                    {
                        let setTime  = item.time.split(' ') 
                        return setTime[1];
                    }
                )

                return (
                    <div className='forecastItem' key={index}>
                        <div className='forecastItem__time'>{time()}</div>
                        <div className='forecastItem__temp'>{item.temp_c}</div>
                        <div className='forecastItem__icon'>
                            {forcastInfo.icon}
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

export default Tomorrow
