

function CountrySummary (props){

    let languageList =[]
    let currencyList =[];
    if (props.languages) {
        const entries = Object.entries(props.languages)
        
        languageList = entries.map(([key, value]) => (
            <li key ={key}>
             {key}: {value}
            </li>
          ));   
    }
   
   
    if (props.currencies) {
        const entries = Object.entries(props.currencies)
        
        currencyList = entries.map(([key]) => (
          
            <li key = {key}>
              {key} 
            </li>
          ));   
    }
    
     

return(
    <div>
    
        <label>Capital:{props.capital}</label> 
        <br></br>
        <label>Languages:{languageList}</label>
        <br></br>
        <label> Currency:{currencyList}</label>
        
        
        
        
        
        
        
    
        
     
    </div>  
)
}

    
   

export default CountrySummary;
