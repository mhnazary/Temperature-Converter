let citiesData = {
  kabul: {city: 'kabul', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
  herat: {city: 'herat', temp: 9, weather: 'windy', humidity: 12, windSpeed: 14},
  kandahar: {city: 'kandahar', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
  helmand: {city: 'helmand', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
  balkh: {city: 'balkh', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
}

let $ = document
let searchBtn = $.getElementById('search')
let searchBar = $.querySelector('.search-bar')

searchBtn.addEventListener('click', function () {
    let mainCityName = searchBar.value
    let mainCitypro = citiesData[mainCityName] 

    if(mainCitypro){
      $.querySelector('.city').innerHTML = 'weather in '+ mainCitypro.city
      $.querySelector('.weather').classList.remove('loading');
      $.querySelector('.temp').innerHTML = mainCitypro.temp + '°C';
      $.querySelector('.description').innerHTML = mainCitypro.weather 
      $.querySelector('.humidity').innerHTML ='Humidity: ' + mainCitypro.humidity + '%'
      $.querySelector('.wind').innerHTML = 'Wind speed: ' +mainCitypro.windSpeed + ' km/h'

    }else {
      alert ('Invalid input')
    }
  
})