import { useState } from 'react'
import { fetchWeatherData } from './service/weather'

const Weather = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const getData = async () => {
    try {
      const data = await fetchWeatherData(city)
      setWeatherData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getData()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter city name'
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type='submit'>Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}</p>
        </div>
      )}
    </div>
  )
}

export default Weather
