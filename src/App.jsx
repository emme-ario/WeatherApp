import React,{useState,useEffect} from 'react';


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
        <form onSubmit={(ev) => CercaDati(ev)}>
          <input type="text" value={city} onChange={(ev)=> setCity(ev.target.value)}/> 
          <input type="submit" value="cerca"></input>
        </form>
      }

      <pre>{JSON.stringify(weather,null,2)}</pre>
      
      {(typeof weather.main != "undefined") ? (
        <div className="location">{weather.main.temp},{weather.weather[0].id}</div>
        ) : ('')}
    </div>
  );
}

export default App;