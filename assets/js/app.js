let weatherForm = document.querySelector('.weather__form')
let inputCity = document.querySelector('.weather__city')
let apiDataContainer = document.querySelector('.weather__data')

let apiURL = 'https://api.weatherapi.com/v1/current.json?key=88a4315ee65e4e5c8ec131712230104&aqi=yes&q='

weatherForm.addEventListener('submit', (event) => {
    let city = inputCity.value;
    let fullApiUrl = apiURL + city

    fetch(fullApiUrl).then(response => response.json()).then((dataFromApi) => {
        // console.log(dataFromApi.current.temp_c)
        let view = ``
        // view += `W ${dataFromApi.location.name} jest dzisiaj ${dataFromApi.current.temp_c} stopni celcjusza`

        //  data
        view += `<div class='weather__info'>`

        // icon
        view += `<div class='weather__icon'>      

        <img src= '${dataFromApi.current.condition.icon}' alt='${dataFromApi.current.condition.text}' >

        </div>`

        // location
        view += `<div class='weather_location'>
            </p>${dataFromApi.location.name}</p>
            </p>${dataFromApi.location.country}</p>
            </p>${dataFromApi.location.localtime}</p>
        </div>`

        // temp
        view += `<div class='weather__temp'>

        ${dataFromApi.current.temp_c} <span> &deg; C </span>

        </div>`

        //details 
        view += `<div class="weather__details">
                <p>The amount of rainfall: ${dataFromApi.current.precip_mm}mm </p>
                <p>Humidity: ${dataFromApi.current.humidity}%</p>
                <p>Wind: ${dataFromApi.current.wind_kph}km/h</p>
            </div>`

        view += `</div>`

        apiDataContainer.innerHTML = view
    })

    event.preventDefault()
})