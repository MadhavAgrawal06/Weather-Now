import { useState } from "react";
import "./App.css";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bgVideo, setBgVideo] = useState("https://res.cloudinary.com/dixobi8rb/video/upload/v1761768037/default_dk40en.mp4");

  const getCoordinates = async (cityName) => {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      const { latitude, longitude, name, country } = data.results[0];
      return { latitude, longitude, name, country };
    } else {
      throw new Error("City not found");
    }
  };

  const getWeather = async () => {
    if (!city.trim()) return alert("Please enter a city name!");
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const { latitude, longitude, name, country } = await getCoordinates(city);
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,precipitation,cloud_cover,wind_speed_10m,relative_humidity_2m&timezone=auto`
      );
      const data = await res.json();

      const current = data.current;

      // choose background video
      let video = "https://res.cloudinary.com/dixobi8rb/video/upload/v1761768037/default_dk40en.mp4";

if (current.precipitation > .1)
  video = "https://res.cloudinary.com/dixobi8rb/video/upload/v1761768037/rainy_l1ieuf.mp4";
else if (current.cloud_cover > 70)
  video = "https://res.cloudinary.com/dixobi8rb/video/upload/v1761768037/cloudy_fycdfq.mp4";
else if (current.temperature_2m < 5)
  video = "https://res.cloudinary.com/dixobi8rb/video/upload/v1761768056/snow_wltkbq.mp4";
else if (current.temperature_2m > 30)
  video = "https://res.cloudinary.com/dixobi8rb/video/upload/v1761768054/hot_xmpxhp.mp4";
else
  video = "https://res.cloudinary.com/dixobi8rb/video/upload/v1761768040/sunny_aiwjkd.mp4";


      setBgVideo(video);
      setWeather({
        city: name,
        country,
        temperature: current.temperature_2m,
        windspeed: current.wind_speed_10m,
        precipitation: current.precipitation,
        cloudCover: current.cloud_cover,
        humidity: current.relative_humidity_2m,
        time: current.time,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") getWeather();
  };

  return (
    <div className="weather-container">
      <video key={bgVideo} autoPlay muted loop className="background-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="search-box p-4 rounded shadow-lg text-center text-light">
          <h1 className="text-dark fw-bold mb-4">🌤️ Weather Now</h1>

          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name "
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="btn btn-primary" onClick={getWeather}>
              Get Weather
            </button>
          </div>

          {loading && <div className="spinner-border text-light my-4"></div>}
          {error && <p className="text-danger">{error}</p>}

          {weather && (
            <div className="card p-4 bg-light bg-opacity-75 text-dark">
              <h3>
                {weather.city}, {weather.country}
              </h3>
              <h1 className="display-4 text-primary">
                {Math.round(weather.temperature)}°C
              </h1>
              <p>💨 Wind Speed: {weather.windspeed} km/h</p>
              <p>🌧️ Precipitation: {weather.precipitation} mm</p>
              <p>☁️ Cloud Cover: {weather.cloudCover}%</p>
              <p>💧 Humidity: {weather.humidity}%</p>
              <p className="text-muted">
                <i><b>Last updated: </b></i> {new Date(weather.time).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
