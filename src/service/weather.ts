import axios from 'axios'

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}?q=${city}&appid=${import.meta.env.VITE_APP_API_KEY}`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
