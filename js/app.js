const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

const updateUI = (weather) => {
    details.innerHTML = '< p class="mb-3" > CLOUDS</ ><div class="display-4 mb-3"> <span>TEMP</span><span>&deg;C</span>'
}

const getWeather = async (city) => {
    const data = await getDAta(city);
    return data
}

changeLocation.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const cityName = changeLocation.city.value.trim();
    console.log(cityName);
    changeLocation.reset();
    getWeather(cityName).then((data) => updateUI(data))
}); 