
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Walpaper from './components/Walpaper'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [image, setImage] = useState()
  
  
  
  const succes = position => {
    
    const obj ={
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    setCoords(obj)
  }
  
  
  useEffect(() => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(succes);
  }, [])
  
  

  useEffect(() => {
    if(coords){
    const APIKEY = '60858197b1834d2c59f4f698b48c5c00'
    const Url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  
    axios.get(Url)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(1)
      const farenheit = (celsius * 9/5 + 32).toFixed(1)
      setTemp({ celsius, farenheit })
      setWeather(res.data)
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }
  }, [coords])
  
  useEffect(() => {
    if (weather !== undefined) {
    const Apikey = '39316812-d52cdffaf6f91d6e23f526e9a'
    const url = `https://pixabay.com/api/?key=${Apikey}&q=${weather.weather[0].description}`
    axios.get(url)
    .then(res => setImage(res.data))
    .catch(err => console.log(err))
    }
  }, [weather])
  

  return (
    <>
    <div>
      {
        isLoading 
        ? <h2 className='carga'>Loading...</h2>
        : (
          <div>
            <Walpaper 
            image={image}/>
            <WeatherCard
            weather={weather}
            temp={temp}
          />
          </div>
        )
      }
    </div>
    </>
  )
}

export default App
