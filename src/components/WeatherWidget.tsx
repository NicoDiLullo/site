import { useEffect, useState } from 'react'

// Providence, RI coordinates
const LAT = 41.824
const LON = -71.413

const WMO_CODES: Record<number, string> = {
  0: 'Clear Sky', 1: 'Mainly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Icy Fog',
  51: 'Light Drizzle', 53: 'Drizzle', 55: 'Heavy Drizzle',
  61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain',
  71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow', 77: 'Snow Grains',
  80: 'Rain Showers', 81: 'Rain Showers', 82: 'Violent Showers',
  85: 'Snow Showers', 86: 'Heavy Snow Showers',
  95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm',
}

const WMO_ICONS: Record<number, string> = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  71: '🌨️', 73: '❄️', 75: '❄️', 77: '❄️',
  80: '🌦️', 81: '🌧️', 82: '⛈️',
  85: '🌨️', 86: '🌨️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
}

interface WeatherData {
  temp: number
  feelsLike: number
  code: number
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
      `&current=temperature_2m,apparent_temperature,weathercode` +
      `&temperature_unit=fahrenheit&forecast_days=1`
    )
      .then(r => r.json())
      .then(d => {
        setWeather({
          temp: Math.round(d.current.temperature_2m),
          feelsLike: Math.round(d.current.apparent_temperature),
          code: d.current.weathercode,
        })
      })
      .catch(() => setError(true))
  }, [])

  return (
    <div className="widget">
      <span className="widget-label">WEATHER · PROVIDENCE, RI</span>
      {error ? (
        <span className="widget-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Unable to load
        </span>
      ) : !weather ? (
        <span className="widget-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Loading…
        </span>
      ) : (
        <div className="weather-body">
          <span className="weather-icon">{WMO_ICONS[weather.code] ?? '🌡️'}</span>
          <div className="weather-info">
            <span className="weather-temp">{weather.temp}°F</span>
            <span className="widget-subtitle">{WMO_CODES[weather.code] ?? 'Unknown'}</span>
            <span className="widget-progress-label">Feels like {weather.feelsLike}°F</span>
          </div>
        </div>
      )}
    </div>
  )
}
