import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CountrySummary from './CountrySummary';


function App() {

  const[country,setCountry] = useState([])
  const[selectedCountry,setSelectedCountry] = useState([])

  
  
  useEffect(()=>{ 
    const url ='https://restcountries.com/v3.1/all'
    axios.get (url)
    .then ((response)=>{
      console.log (response)
      setCountry(response.data);
    });
    
  },[]);

  const selectionChanged = (e) => {
    
    var data_found_by_key = country.find((currentCountry) => { return (e.target.value === currentCountry.cca2)})
    console.log(data_found_by_key)
    setSelectedCountry(data_found_by_key);
  }

  return (
  <>
   <div className="App">
    {
      <><select onChange={(e) => selectionChanged(e)}>
            {country.map((ct) => { return <option value = {ct.cca2}> {ct.name.common}</option>; })}
          </select><CountrySummary languages={selectedCountry.languages} currencies = {selectedCountry.currencies} 
           capital={selectedCountry.capital}/></>
      
    }
   </div>
   </>
  );
}

export default App;
