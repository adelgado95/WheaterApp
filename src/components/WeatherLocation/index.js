import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import PropTypes from 'prop-types';
import './styles.css';

const api_key = "8bf87ea12c0598d0dc8a5b51704ded7b";
const url = "http://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends Component {

    constructor({city}){
        console.log('Constructor');
        super();
        this.state = {
            city,
            data: null
        }
    }
    

    handleUpdateClick = () => {
        const city = this.state.city;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data =>{
            console.log(data);
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({ data });
            console.log(weather_data);
        });
    }
    
    componentWillMount() {
        this.handleUpdateClick();
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will Update');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update');     
    }

  render = () =>{
      const {onWeatherLocationClick} = this.props;
      console.log('render');
    const {city,data} = this.state;
    return (<div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : <CircularProgress/>}
    </div>
    )};
}
WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;