//Create a  weather dashboard with form inputs.
//When a user searches for a city they are presented with current and 
//future conditions for that city and that city is added to the search history
//When a user views the current weather conditions for that city they are presented with:
//The city name
//The date
//An icon representation of weather conditions
//The temperature
//The humidity
//The wind speed
//When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
//The date
//An icon representation of weather conditions
//The temperature
//The humidity
//When a user click on a city in the search history they are again presented 
//with current and future conditions for that city

// current date
var currentDate = dayjs().format('DD/MM/YYYY');
//console.log(currentDate);

// set up variable with geocoding and weather API string query
var queryGeocodingURL = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=5e3cb231bebc42f417b7fdd7ddb5ba17';
var queryWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=ecd2fd4c494c5dfad1e8f15631c9dac6';

// fetch the latitude and longitude for city 
fetch(queryGeocodingURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
     //console.log(data);
  });

// fetch the weather forecast for chosen city 
    fetch(queryWeatherURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
  });