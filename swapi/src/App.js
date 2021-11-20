import React, { useEffect, useState} from 'react';
import './App.css';

function App() {
  const [ planet, setPlanet ] = useState({});//default is an object
  const [ changePlanet, setChangePlanet] = useState(1); //starting from id No.1

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/"+changePlanet)
      //successful response
      .then((response) => {
        console.log(response);
        //Only wehn we have a successful response to our fetch can we convert
        // the response over to JSON for us to use
        response.json()
          //this is a successful response to our json conversion
          .then((jsonResponse) => {
            console.log(jsonResponse);
            setPlanet(jsonResponse);
          })
          //this is the error caused when we tried to convert the response to json
          .catch((jsonError) => {
            console.log(jsonError);
          })
      })
      //failure /error response
      .catch((error) => {
        console.log(error);
      });
  },[changePlanet]); //dependency list is an array of state that we watch
  //if the value changes, it will re-run the useEffect callback function

  const changePlanetClick = () => {
    //add 1 to the current planet ID
    setChangePlanet(changePlanet + 1);
  }
  return (
    <div className="App">
      <h2>Using APIs</h2>
      {/*   */}
      <button onClick = {(e)=> changePlanetClick() }>Change Planet</button>
      <h4> {planet.name }</h4>
      <p> Climate: { planet.climate }</p>
    </div>
  );
}

export default App;
