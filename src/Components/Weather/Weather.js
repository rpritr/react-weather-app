import React from 'react';
import './Weather.css';
import WeatherHeader from "./WeatherHeader/WeatherHeader";
import WeatherTemperature from "./WeatherTemperature/WeatherTemperature";
const Weather = (props) => {
    const sunny = new URL('../../assets/sunny.svg', import.meta.url);

    return (
        <div className="weather">
            <WeatherHeader icon={sunny} location="Valle de Angeles, HN" date="Monday 01/17/2022"/>
            <WeatherTemperature temperature={15} description="Mostly sunny"/>

        </div>
    )
}

export default Weather;