const apiKey = '45bc071f1c6d8224c3c223ed008ea9ba'; // Replace with your API key
const city = 'London'; // Replace with the city you want weather information for
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

export default function fetch(apiUrl){
    
}
  
  .then(data => {
    console.log(data); // View the data in the console

    // Update HTML elements with weather information
    const weatherInfo = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Description: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    document.getElementById('weather').innerHTML = weatherInfo;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather').innerHTML = '<p>Failed to fetch weather data</p>';
  });
