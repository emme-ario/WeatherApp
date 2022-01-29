import React,{useState,useEffect} from 'react';
import PrintData from './WeatherPage';

const API_KEY =  "d5eadf8e319f2c179bf8c1501a4338f5"

function App() {
  const [searchVisible,setSearchVisible] = useState(true)
  const [weather,setWeather] = useState({})
  const [city, setCity] = useState("")

  function setVisible(domId, visible) {
    let value = "none"
    if(visible === true) {
      value = "block"
    }
    document.getElementById(domId).style.display= value
  }

  function setContent(domId,content) {
    document.getElementById(domId).innerHTML = content 
  }
  
  function CercaDati(ev) {
    ev.preventDefault();
    setSearchVisible(false)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(body => setWeather(body))
    
    /*
    setContent("weather.icon",weather.weather[0].icon)
    setContent("temperature",weather.main.temp)
    setContent("weather.description",weather.weather[0].description)
    setContent("weather.main",weather.weather[0].main)
    */

    return false   
    
  }

  useEffect(() => {
    if (!weather) return
    //setVisible("recipe", true)
  }, [weather])
    
  return (
    <div className="mainDiv">
      {searchVisible &&
        <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
            <form onSubmit={(ev) => CercaDati(ev)} className="uk-align-center uk-search uk-search-navbar">
              {/* <span uk-search-icon></span> */}
              <input value={city} onChange={(ev)=> setCity(ev.target.value)} className="uk-search-input" type="search" placeholder="Search"></input>
            </form>
        </div>
      }

      {/* <pre>{JSON.stringify(weather,null,2)}</pre> */}
      
      {(typeof weather.main != "undefined") ? (
        <PrintData weather={weather}/>
        ) : ('')}
    </div>
  );
}

export default App;