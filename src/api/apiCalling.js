import axios from 'axios';



const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily',
    params: {
      lat: '38.5',
      lon: '-78.5'
    },
    headers: {
      'X-RapidAPI-Key': '39870e17b3mshfb238bcfd1a9944p199473jsneaa09393eaf2',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

export async function forecast() {
    try {
        const response = await axios.request(options);
        const data = await response.json
        console.log(data);
    } catch (error) {
        console.log("error");
    }
}