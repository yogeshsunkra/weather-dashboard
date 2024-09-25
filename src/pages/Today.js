import React from 'react'
import './today.css';
import '../components/utility.css';
import { weatherList } from '../utility/dataUtlis';


const Today = ({ data }) => {

    const date = new Date();
    const hourNow = date.getHours();


    const forecastInfo = {};


    return (
        <div className='todayForecast'>
            <div className='todayContent'>



                {data &&
                    (


                        data.hour.slice(hourNow).map((item, index) => {


                            const iconCode = weatherList.find((icon) => icon.code === item.condition.code);
                            if (iconCode) {

                                forecastInfo.icon = item.is_day ? iconCode.day : iconCode.night;
                            }

                            else {

                                forecastInfo.icon = 'default-icon'; // or some other default icon
                            }

                            const time = (() => {
                                let setTime = item.time.split(' ')
                                return setTime[1];
                            }
                            )

                            return (
                                <div className='forecastItem' key={index}>
                                    <div className='flex center ' style={{
                                        width: "12rem"
                                    }}>
                                        <div className='forecastItem__icon'>
                                            {forecastInfo.icon}
                                        </div>

                                        <div >
                                            <div className='forecastItem__time forecastItemText'>{time()}</div>
                                            <div className='text-sm font-400 color-lt forecastItemText'>{item.condition.text}</div>

                                        </div>
                                    </div>

                                    <div className='forecastItem__temp  font-700 color-md' >{`${Math.round(item.temp_c)} C`}</div>

                                    <div className='flex center justify-sb'>

                                        <div style={{ margin: "1rem" }}>
                                            <div className='text-sm font-400 color-lt forecastItemText' >{`Wind : ${item.wind_kph} km`}</div>
                                            <div className='text-sm font-400 color-lt forecastItemText'> {`Humidity : ${item.humidity} %`}</div>

                                        </div>
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

export default Today
