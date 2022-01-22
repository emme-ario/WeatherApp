class Weather {
    constructor(id,main,description,icon,readonly,state_code,value) {
        this.Weather = Weather
        this.id = id
        this.main = main
        this.description = description
        this.icon = icon
    }
}

function JSONToWeather(jsonObject) {
    const { 
        Weather: Weather,
        id: id,
        main: main,
        description: description,
        icon: icon,
    } = jsonObject // destructuring

    const Weather = new Weather(Weather, id, main, description, icon)

    console.log(Weather)
    return Weather
}