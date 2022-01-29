class Main {

    constructor(temperature) {
        this.Main = Main
        this.temperature = temperature
    }
}

function JSONToMain(jsonObject) {
    const { 
        Main: Main,
        temperature: temperature,
    } = jsonObject // destructuring

    const Main = new Main(Main, temperature)

    console.log(Main)
    return Main 
}
