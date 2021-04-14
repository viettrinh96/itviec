import "./App.css";
import { NavBar } from "./components/NavBar";
import { GroupButton } from "./components/GroupButton";
import { Box } from "./components/Box";
import { useEffect } from "react";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const CITY_CODE = [
  "Hanoi",
  "Saigon",
  "Philadelphia",
  "London",
  "Toronto",
  "Paris",
];

function App() {
  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState(null);

  const weatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Saigon&appid=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    console.log("weather", data);
  };

  useEffect(() => {
    async function fetchData() {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      let res = await fetch(url);
      let data = res.json();
      data.then((result) => {
        setWeather(result);
      });
    }
    fetchData();
  }, [city]);

  useEffect(() => {
    weatherByCity();
  }, []);

  const onCityChange = (cityEvent) => {
    setCity(cityEvent);
    console.log("wth", cityEvent);
  };

  return (
    <div>
      <NavBar />
      <div className="section">
        <div className="group-button">
          {CITY_CODE.map((city, index) => (
            <GroupButton countryName={city} onClick={onCityChange} />
          ))}
        </div>
        <Box
          cityName={weather?.name}
          countryName={weather?.sys?.country}
          temperature={weather?.main?.temp}
        />
      </div>
    </div>
  );
}

export default App;
