import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationsList = ({cities, onSelectedLocation}) =>{      
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherocationCLick");
        onSelectedLocation(city);
    }
    const strToComponent = cities =>(
        cities.map( city => 
             (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick={() => handleWeatherLocationClick(city )}/>))
    );

    return(<div>
        {strToComponent(cities)};
    </div>);
}

LocationsList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}


export default LocationsList;