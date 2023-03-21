import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json(res))
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Rest Country API with React</h1>
      <h2>Total Countries: {countries.length}</h2>
      {
        countries.map(country => <Country name= {country.name.common} capital= {country.capital} languages= {country.languages}> </Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h1>Country: {props.name}</h1>
      <h2>Capital: {props.capital}</h2>
      <h2>Languages: {props.languages}</h2>
    </div>
  )
}

export default App;
