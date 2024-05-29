import axios from 'axios';


export async function currentWeather( lat,lon) {
  
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: `${lat},${lon}`},
    headers: {
      'X-RapidAPI-Key': '39870e17b3mshfb238bcfd1a9944p199473jsneaa09393eaf2',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    const currentWeather = await response.data;
    return currentWeather;
  } catch (error) {
    console.log(error);
  }

}  


export async function weatherInfo(lat ,lon){


  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: `${lat},${lon}`,
      days: '3'
    },
    headers: {
      'X-RapidAPI-Key': '39870e17b3mshfb238bcfd1a9944p199473jsneaa09393eaf2',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    const weatherForecast = response.data;
    return weatherForecast;
  } catch (error) {
    console.log(error);
  }

}





// export async function forecast() {

//   const options = {
//     method: 'GET',
//     url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
//     params: {
//       lat: '38.5',
//       lon: '-78.5'
//     },
//     headers: {
//       'X-RapidAPI-Key': '39870e17b3mshfb238bcfd1a9944p199473jsneaa09393eaf2',
//       'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }