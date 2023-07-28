import React, { useState, useEffect } from 'react'
import DisplayData from './DisplayData'
import './Weather.scss'


const GetData = () => {
    const [currentCity, setCurrentCity] = useState('')
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);





    function inputHandler(e) {
        setCurrentCity(e.target.value)
    }

    let API_key = '050637cb59abe2b93968f907ef97451d'

    const submitHandler = async (e) => {
        e.preventDefault();




        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_key}&units=metric`

            )

            if (!response.ok) {
                setCity(currentCity)
                throw new Error('weather data not found')
            }

            const data = await response.json()
            setWeatherData(data)
            console.log(weatherData)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null);
        }


        setCurrentCity('');




    }

    const Error_message = () => {
        return (
            <div>
                <h1>Please enter a valid city name.</h1>
            </div>
        )
    }

    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);

    return (
        <div className='get_data_main_cont d-flex flex-column' >
            <form className='get_data_cont my-4' onSubmit={submitHandler}>
                <input type="text" value={currentCity} name="" id="" onChange={inputHandler} />
                <button type='submit'>Submit</button>
            </form>
            {weatherData != null && <DisplayData weatherData={weatherData} city={city} />}
            {weatherData == null && city != '' && <Error_message />}



        </div>
    )
}

export default GetData