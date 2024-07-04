
// import  {}  from "../assets/clear-day.svg"
import { ReactComponent as ClearDay} from "../assets/weatherIcons/clear-day.svg";
import { ReactComponent as ClearNight} from "../assets/weatherIcons/clear-night.svg";
import { ReactComponent as Cloudy} from "../assets/weatherIcons/cloudy.svg";
import { ReactComponent as Drizzle } from "../assets/weatherIcons/drizzle.svg";
import { ReactComponent as FogDay } from "../assets/weatherIcons/fog-day.svg";
import { ReactComponent as FogNight } from "../assets/weatherIcons/fog-night.svg";
import { ReactComponent as HazeDay } from "../assets/weatherIcons/haze-day.svg";
import { ReactComponent as HazeNight } from "../assets/weatherIcons/haze-night.svg";
import { ReactComponent as Horizon } from "../assets/weatherIcons/horizon.svg";
import { ReactComponent as Hurricane } from "../assets/weatherIcons/hurricane.svg";
import { ReactComponent as LightningBolt } from "../assets/weatherIcons/lightning-bolt.svg";
import { ReactComponent as Mist } from "../assets/weatherIcons/mist.svg";
import { ReactComponent as Overcast } from "../assets/weatherIcons/overcast.svg";
import { ReactComponent as OvercastDay } from "../assets/weatherIcons/overcast-day.svg";
import { ReactComponent as OvercastNight } from "../assets/weatherIcons/overcast-night.svg";

import { ReactComponent as CloudyDay } from "../assets/weatherIcons/partly-cloudy-day.svg";
import { ReactComponent as CloudyDayDrizzle } from "../assets/weatherIcons/partly-cloudy-day-drizzle.svg";
import { ReactComponent as CloudyDayFog } from "../assets/weatherIcons/partly-cloudy-day-fog.svg";
import { ReactComponent as CloudyDayHail } from "../assets/weatherIcons/partly-cloudy-day-hail.svg";
import { ReactComponent as CloudyDayHaze } from "../assets/weatherIcons/partly-cloudy-day-haze.svg";
import { ReactComponent as CloudyDayRain } from "../assets/weatherIcons/partly-cloudy-day-rain.svg";
import { ReactComponent as CloudyDaySleet } from "../assets/weatherIcons/partly-cloudy-day-sleet.svg";
import { ReactComponent as CloudyDaySnow } from "../assets/weatherIcons/partly-cloudy-day-snow.svg";
import { ReactComponent as CloudyDaySmoke } from "../assets/weatherIcons/partly-cloudy-day-smoke.svg";

import { ReactComponent as CloudyNight } from "../assets/weatherIcons/partly-cloudy-night.svg";
import { ReactComponent as CloudyNightDrizzle } from "../assets/weatherIcons/partly-cloudy-night-drizzle.svg";
import { ReactComponent as CloudyNightFog } from "../assets/weatherIcons/partly-cloudy-night-fog.svg";
import { ReactComponent as CloudyNightHail } from "../assets/weatherIcons/partly-cloudy-night-hail.svg";
import { ReactComponent as CloudyNightHaze } from "../assets/weatherIcons/partly-cloudy-night-haze.svg";
import { ReactComponent as CloudyNightRain } from "../assets/weatherIcons/partly-cloudy-night-rain.svg";
import { ReactComponent as CloudyNightSleet } from "../assets/weatherIcons/partly-cloudy-night-sleet.svg";
import { ReactComponent as CloudyNightSnow } from "../assets/weatherIcons/partly-cloudy-night-snow.svg";
import { ReactComponent as CloudyNightSmoke } from "../assets/weatherIcons/partly-cloudy-night-smoke.svg";

import { ReactComponent as Rain } from "../assets/weatherIcons/rain.svg";
import { ReactComponent as Sleet } from "../assets/weatherIcons/sleet.svg";
import { ReactComponent as Snow } from "../assets/weatherIcons/snow.svg";
import { ReactComponent as Thunderstorm } from "../assets/weatherIcons/thunderstorms.svg";
import { ReactComponent as ThunderstormDayRain } from "../assets/weatherIcons/thunderstorms-day-rain.svg";
import { ReactComponent as ThunderstormDaySnow } from "../assets/weatherIcons/thunderstorms-day-snow.svg";
import { ReactComponent as ThunderstormDay } from "../assets/weatherIcons/thunderstorms-day.svg";
import { ReactComponent as ThunderstormNightRain } from "../assets/weatherIcons/thunderstorms-night-rain.svg";
import { ReactComponent as ThunderstormNightSnow } from "../assets/weatherIcons/thunderstorms-night-snow.svg";
import { ReactComponent as ThunderstormNight } from "../assets/weatherIcons/thunderstorms-night.svg";
import { ReactComponent as ThunderstormRain } from "../assets/weatherIcons/thunderstorms-rain.svg";
import { ReactComponent as ThunderstormSnow } from "../assets/weatherIcons/thunderstorms-snow.svg";
import { IconBase } from "react-icons";





export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

];


export const weatherList = [

    {
        code : 1000,
        day : <ClearDay/>,
        night : <ClearNight/>,

    },
    {
        code : 1003,
        day : <CloudyDay/>,
        night : <CloudyNight/>,

    },
    {
        code : 1006,
        day : <Cloudy/>,
        night : <Cloudy/>,

    },
    {
        code : 1009,
        day : <Overcast/>,
        night : <Overcast/>,

    },
    {
        code : 1030,
        day : <Mist/>,
        night : <Mist/>,

    },
    {
        code : 1063,
        day : <CloudyDayRain/>,
        night : <CloudyNightRain/>,

    },
    {
        code : 1066,
        day : <CloudyDaySnow/>,
        night : <CloudyNightSnow/>,

    },
    {
        code : 1069,
        day : <CloudyDaySleet/>,
        night : <CloudyNightSleet/>,

    },
    {
        code : 1072,
        day : <CloudyDayDrizzle/>,
        night : <CloudyNightDrizzle/>,

    },
    {
        code : 1087,
        day : <ThunderstormDay/>,
        night : <ThunderstormNight/>,

    },
    {
        code : 1114,
        day : <CloudyDay/>, //##############
        night : <CloudyNight/>,//##############

    },
    {
        code : 1117,
        day : <CloudyDay/>,//##############
        night : <CloudyNight/>,//##############

    },
    {
        code : 1135,
        day : <FogDay/>,
        night : <FogNight/>,

    },
    {
        code : 1147,
        day : <FogDay/>, 
        night : <FogNight/>, 

    },
    {
        code : 1150,
        day : <CloudyDayDrizzle/>,
        night : <CloudyNightDrizzle/>,

    },
    {
        code : 1153,
        day : <CloudyDayDrizzle/>,
        night : <CloudyNightDrizzle/>,

    },
    {
        code : 1168,
        day : <Drizzle/>,
        night : <Drizzle/>,

    },
    {
        code : 1171,
        day : <Drizzle/>,
        night : <Drizzle/>,

    },
    {
        code : 1180,
        day : <CloudyDayRain/>,
        night : <CloudyNightRain/>,

    },
    {
        code : 1183,
        day : <CloudyDayRain/>,
        night : <CloudyNightRain/>,

    },
    {
        code : 1186,
        day : <CloudyDayRain/>,
        night : <CloudyNightRain/>,

    },
    {
        code : 1189,
        day : <Rain/>,
        night : <Rain/>,

    },
    {
        code : 1192, 
        day : <CloudyDayRain/>, 
        night : <CloudyNightRain/>,

    },
    {
        code : 1195,
        day : <Rain/>, 
        night : <Rain/>,

    },
    {
        code : 1198,
        day : <Rain/>,
        night : <Rain/>,

    },
    {
        code : 1201,
        day : <Rain/>,
        night : <Rain/>,

    },
    {
        code : 1204,
        day : <Sleet/>,
        night : <Sleet/>,

    },
    {
        code : 1207,
        day : <Sleet/>,
        night : <Sleet/>,

    },
    {
        code : 1210,
        day : <CloudyDaySnow/>,
        night : <CloudyNightSnow/>,

    },
    {
        code : 1213,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1216,
        day : <CloudyDaySnow/>,
        night : <CloudyNightSnow/>,

    },
    {
        code : 1219,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1222,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1225,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1237,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1240,
        day : <Rain/>,
        night : <Rain/>,

    },
    {
        code : 1243,
        day : <Rain/>,
        night : <Rain/>,

    },
    {
        code : 1246,
        day : <Rain/>,
        night : <Rain/>,

    },
    {
        code : 1249,
        day : <Sleet/>,
        night : <Sleet/>,

    },
    {
        code : 1252,
        day : <Sleet/>,
        night : <Sleet/>,

    },
    {
        code : 1255,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1258,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1261,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1264,
        day : <Snow/>,
        night : <Snow/>,

    },
    {
        code : 1273,
        day : <ThunderstormDayRain/>,
        night : <ThunderstormNightRain/>,

    },
    {
        code : 1276,
        day : <ThunderstormRain/>,
        night : <ThunderstormRain/>,

    },
    {
        code : 1279,
        day : <ThunderstormDaySnow/>,
        night : <ThunderstormNightSnow/>,

    },
    {
        code : 1282,
        day : <ThunderstormSnow/>,
        night : <ThunderstormSnow/>,

    },

    

    

]