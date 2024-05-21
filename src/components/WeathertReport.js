import React from 'react'
import './weatherReport.css';

const WeathertReport = () => {
  return (
    <div className='weatherContainer'>

      <div className='weather'>
        <h1>41 ^0 c</h1>
        <p>Sunny</p>
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
