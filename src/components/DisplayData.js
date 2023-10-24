import React, { useEffect, useState } from "react";
import sunny from "../assets/sunny.jpg";
import hazy from "../assets/hazy.jpg";
import rainy from "../assets/rainy.jpg";
import cloud from "../assets/cloudy.jpg";
import cold from "../assets/cold.jpg";
// import calm from '../assets/calm.jpg'

const DisplayData = (props) => {
  const [loading, setLoading] = useState(false);

  const weather_day = [
    {
      icon: hazy,
      text: "hazy",
      color: '#CCCCCC'
    },
    {
      icon: rainy,
      text: "Rain",
      color: '#0366d6'
    },
    {
      icon: cloud,
      text: "Clouds",
      color: '#cccccc'
    },
    {
      icon: cold,
      text: "Cold",
      color: '#2541B2'
    },
    {
      icon: sunny,
      text: "Clear",
      color: '#FFD700'
    },
  ];

  const { name, main, weather } = props.weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

  useEffect(() => {
    setLoading(true);
      const bodyElement = document.querySelector("body");
      weather_day.forEach((item, idx) => {
        if (item.text === weather[0].main) {
        //   bodyElement.style.backgroundImage = `url(${item.icon})`;
          bodyElement.style.backgroundColor = item.color
        }
        setLoading(false);
      });

    
  }, [weather]);



  return (
    <div>
      {loading ? (
        <h2>Waiting for results...</h2>
      ) : (
        <div className="display_data_cont d-flex flex-column">
          <div className="main_info ">
            <div className="inner_cont d-flex justify-content-center align-items-center">
              <h2 className="me-3">{name}</h2>
              <h3>{main.temp} °C</h3>
            </div>
            <div className="weather_info_cont">
              <div className="inner_cont d-flex justify-content-start align-items-center">
                <h3 className="me-3">{weather[0].main}</h3>
                <img src={iconUrl} alt="" />
              </div>
            </div>
          </div>

          <div className="data-weather_info_cont d-flex justify-content-between pt-4 md-0 py-5-xl my-5-xl">
            <div className="inner_cont items">
              <h2>Feels Like</h2>
              <h3>{main.feels_like}</h3>
            </div>
            <div className="inner_cont items">
              <h2>Minimum Temperature</h2>
              <h3>{main.temp_min}</h3>
            </div>
            <div className="inner_cont items">
              <h2>Maximum Temperature</h2>
              <h3>{main.temp_max}</h3>
            </div>
            <div className="inner_cont items">
              <h2>Humidity</h2>
              <h3>{main.humidity}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayData;
