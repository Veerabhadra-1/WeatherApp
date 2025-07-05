import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); 

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f6466cf5b854b1e167ba77effaad3065";

  const getWeatherInfo = async () => {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric` );
    const jsonResponse = await response.json();

    if (response.ok) {
      return {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } else {
      throw new Error(jsonResponse.message);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setCity("");
      setLoading(false);
    }
  };

  return (
    <div className="SearchBox">
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          error={error}
          helperText={error ? "No such city found!" : ""}
          fullWidth
          style={{backgroundColor:" rgba(255, 250, 240, 0.8)",borderRadius:"8px"}}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>
      </form>
    </div>
  );
}
