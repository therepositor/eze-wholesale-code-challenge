import Index from './Routes/Index';
import './App.css';
import {useState, useEffect} from 'react';
// import useDeepCompareEffect from 'use-deep-compare-effect'


function App() {
  const API_URL = 'https://eze-mobile-api-staging.herokuapp.com/api/v1/products/'
  
  const [gadgetsArr, setGadgetArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const handleOnChange = (e) => {
    if(e) return setSearchTerm(e.target.value); 
    
  }
  console.log(searchTerm)
  useEffect(() => {
    const getStuff = async () => {
      const response = await fetch(API_URL);
      const resp = await response.json();
      setGadgetArr(resp.data)
      
    }
    getStuff();
  },[])
  
  const handleSubmit = (e) =>  {
    e.preventDefault()
    
  }
  return (
    <div className="App">
      <Index 
        gadgetsArr={gadgetsArr}
        onChange={handleOnChange}
        searchTerm={searchTerm}
        handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
