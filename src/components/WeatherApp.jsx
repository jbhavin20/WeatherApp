import React, { useState } from 'react'
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'
import loadingGif from '../assets/images/loading.gif'
import animrain from '../assets/images/cloudy (1).gif'


const WeatherApp = () => {
    const [data,setData] = useState([]);
    const [location, setLocation] = useState('')

    const api_key = 'c51bc39907a84eef42a214134347ddc2'

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const search = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`
        const res = await fetch(url)
        const searchData = await res.json(url)
        console.log(searchData)
        setData(searchData)
        setLocation('')
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") {
            search()
        }
    }
    

  return (
    <div className='container'>
        <div className='weather-app'>
            <div className='search'>
                <div className='search-top'>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder='Enter Location' 
                    value={location} 
                    onChange={handleLocation}
                    onKeyDown={handleKeyDown}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
                <img src={animrain} alt="sunnuy" />
                <div className="weather-type">Clear</div>
                <div className="temp">{data.main ? `${Math.floor (data.main.temp)}°` : null}</div>
            </div>
            <div className="weather-date">
                <p>Fri, 3 May</p>
            </div>
            <div className="weather-data">
                <div className="huminity">
                    <div className="data-name">Huminity</div>
                    <i className="fa-solid fa-droplet"></i>
                    <div className="data">30%</div>
                </div>
                <div className="wind">
                    <div className="data-name">Wind</div>
                    <i className="fa-solid fa-wind"></i>
                    <div className="data">3 Km/h</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default WeatherApp
