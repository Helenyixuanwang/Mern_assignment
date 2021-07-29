import React, { useState, useEffect }from 'react';

const Example = (props) => {
    const [state, setState ] = useState([]);

    useEffect(()=> {
        console.log("Hello");
        // fetch('https://swapi.dev/api/people')
        // fetch('https://pokeapi.co/api/v2/pokemon')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            return response.json()
        })
        .then(response => {
            setState(
                response.results
            )
        })
        .catch((err) => {
            console.log(err);
          })
            
    },[]);
    return (  
        
        <ol>
            {state? state.map((item,index) =>{
                return <li key={index}> {item.name} </li>
            }):null}
        </ol>
        
    );
}
 
export default Example;