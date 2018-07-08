import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY,SUNNY,RAIN,SNOW,WINDY,THUNDER,DRIZZLE} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './style.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUNNY:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "day-sunny";
    }
}

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" color="blue"/>);
};

const WeatherTemperature = ({temperature, weatherState}) =>(
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,

}

export default WeatherTemperature;