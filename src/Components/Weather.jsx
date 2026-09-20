import { useState } from "react"
import axios from "axios"

function Weather() {

    const [city, setCity] = useState("")
    
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    const [error, setError] = useState("")

    function handleCity(evt) {
        setCity(evt.target.value)
    }

    function getWeather() {

        if (city.trim() === "") {
            setError("Please enter a city name")
            return
        }

        setError("")

        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

        const weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

        weatherData.then(function (success){
                console.log(success.data)
                setWeather(success.data.weather[0].main)
                setTemp(Math.round(success.data.main.temp - 273.15))
                setDesc(success.data.weather[0].description)
            })
            .catch(function (error) {
                console.log(error)

                if (error.response?.status === 404) {
                    setError("City not found. Please enter a valid city name.")
                }
                else if (error.response?.status === 401) {
                    setError("Invalid API key.")
                }
                else {
                    setError("Something went wrong. Please try again.")
                }

            })
    }

    return (
        
        <section id="weather" className="bg-white px-6 py-16">
            <div className="mx-auto max-w-5xl">
                
                <div className="mx-auto flex w-full max-w-2xl">

                    <input type="text" value={city} onChange={handleCity} placeholder="Search for a city..."
                        className="flex-1 rounded-l-full border-2 border-sky-500 bg-white px-6 py-4 text-gray-700 outline-none placeholder:text-gray-400 focus:border-sky-600"/>

                    <button onClick={getWeather}
                        className="rounded-r-full border-2 border-sky-500 bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700">
                        Search
                    </button>

                </div>

                {error && (
                    <p className="mt-4 text-center font-medium text-red-500">
                        {error}
                    </p>)}

                <div className="mt-12 rounded-3xl bg-sky-50 p-8 shadow-sm">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800"> Weather Report </h2>
                        <p className="mt-1 text-gray-500">
                            Search for a city to see the current weather.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <p className="text-sm text-gray-500"> Weather </p>
                            <h3 className="mt-2 text-xl font-semibold text-gray-800">
                                {weather || "--"}
                            </h3>

                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <p className="text-sm text-gray-500"> Temperature </p>
                            <h3 className="mt-2 text-xl font-semibold text-gray-800">
                                {temp ? `${temp}°C` : "--"}
                            </h3>

                        </div>

                        <div className="rounded-2xl bg-white p-6 shadow-sm">

                            <p className="text-sm text-gray-500">Description</p>
                            <h3 className="mt-2 text-xl font-semibold capitalize text-gray-800">
                                {desc || "--"}
                            </h3>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Weather