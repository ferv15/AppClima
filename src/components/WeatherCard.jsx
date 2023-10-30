import { useState } from "react"


const WeatherCard = ({ weather, temp }) => {

    const [iscelsius, setIscelsius] = useState(true)
    const handleChangeTemp = () => setIscelsius(!iscelsius)
    

    return (
    <article>
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <section>
            <header className="icon">
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
            </header>
            <article>
                <h3>"{weather?.weather[0].description}"</h3>
                <ul>
                    <li><span>Wind Speed</span><span>{weather?.wind.speed}m/s</span></li>
                    <li><span>Clouds</span><span>{weather?.clouds.all}%</span></li>
                    <li><span>Pressure</span><span>{weather?.main.pressure}hpa</span></li>
                </ul>
            </article>
        </section>
        <h2>{iscelsius? `${temp?.celsius}ºC` : `${temp?.farenheit}ºF`}</h2>
        <button onClick={handleChangeTemp}>Change to {iscelsius ? `°F` : `°C`}</button>
    </article>
    )
}

export default WeatherCard