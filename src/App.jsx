import React,{useState,useEffect} from 'react';
// import './App.css'

const API_KEY =  "0df3125086d55babcbef0eb570ec442b"

function App() {
  const [weather,setWeather] = useState({})

  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Brescia&appid=${API_KEY}`)
    .then(res => res.json())
    .then(body => setWeather(body))
  },[])

  return (
    <main>
      <pre>{JSON.stringify(weather,null,2)}</pre>
    </main>
  );
}

export default App