import React, { useReducer } from 'react';
/*
three distinct steps

1. the user does something which should trigger a state change
2. This dispatches an action
3. Action goes to reducer, which will change the state

*/
 
const initialState = {
  name: {
    text:"",
    error:"",
  },
  email:  {
    text:'',
    error:'',
  }
  
}
//action = { type:"...", payload:"..."}
const reducer=(state, action) => {
  console.log("Inside reducer");
  switch(action.type) {
case "SET_NAME":
 
  return {
      ...state, //the rest of values in state, without this, it will only return the changed value for the following key value pair
      name: {
        ...state.name,
        text: action.payload,
      }
    };
case "SET_NAME_ERR":
  return {
    ...state,
    name: {
      ...state.name,
      error: action.payload,
    }
  }
case "SET_EMAIL":
  return {
    ...state,
    email: action.payload,
  }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleNameChange = (e)=> {
    if (e.target.value.length < 5) {
      dispatch({
        type:"SET_NAME_ERR",
        payload: "Name must be 5 chars",
      }) ;
    } else {
      dispatch({
        type:"SET_NAME_ERR",
        payload:"",
      });
    }

    dispatch({
      type:'SET_NAME',
      payload:e.target.value,
    });
  };

  const handleEmailChange = (e)=> {
    dispatch({
      type:'SET_EMAIL',
      payload:e.target.value,
    });
  };

  return (
    <div className="App">
      <h1>hey</h1>
      <h2> Name: { state.name.text} </h2>
      <h2> Email: { state.email.text } </h2>
      <form>
        <label>Name:</label>
        <input type="text" onChange={(e)=> handleNameChange(e)} value={ state.name.text}/>
        {
          state.name.error.length > 0 && (<p style={{color:"red"}}>{ state.name.error} </p>)
        }
        <label>Email:</label>
        <input type="email" onChange={(e)=> handleEmailChange(e)} value={ state.email.text }/>
      </form>
    </div>
  );
}

export default App;
