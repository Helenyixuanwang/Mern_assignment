
import './App.css';
import React, { useState } from 'react';
import BoxDisplay from './components/BoxDisplay';
import BoxForm from './components/BoxForm';

// imports removed for brevity
function App() {
// holding an array of strings for the colors input
  const [ boxLst, setBoxLst ] = useState([]);
  
    
  return (
      <>
          {/* // We pass in our function that will take in a string and update our state in our App component */}
          <BoxForm boxLst = { boxLst } setBoxLst = { setBoxLst }/>
          {/* // We pass our state getter from our App component down to MessageDisplay through props */}
          {/* //    for displaying its value */}
          <BoxDisplay boxLst = { boxLst } />
      </>
  );
}
  


export default App;
