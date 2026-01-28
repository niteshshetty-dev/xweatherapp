import { useState } from "react";
export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const apikey = "99efc20967af4cd0a2362459262801";

  console.log(data);

  function handleSubmit() {
    setLoading(true);
    setData({});
    const fecthdata = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apikey}`,
        );

        const rawData = await response.json();
        if (rawData.error) {
          alert("Failed to fetch weather data");
        } else {
          setData(rawData.current);
        }
      } catch {
        alert("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };
    fecthdata();
  }

  return (
    <>
      <div className="weather-app">
        <div className="input-container">
          <input
            type="text"
            value={city}
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          Object.keys(data).length !== 0 && (
            <div className="weather-cards">
              <div className="weather-card">
                <h2>Temperature</h2>
                <p>{data.temp_c}°C</p>
              </div>
              <div className="weather-card">
                <h2>Humidity</h2>
                <p>{data.humidity}%</p>
              </div>
              <div className="weather-card">
                <h2>Condition</h2>
                <p>{data.condition.text}</p>
              </div>

              <div className="weather-card">
                <h2>Wind</h2>
                <p>{data.wind_kph} kph</p>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
