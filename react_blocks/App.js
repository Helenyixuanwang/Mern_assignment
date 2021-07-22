import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
// import MyButton  from './components/MyButton';
 
                
function App() {
  return (
    <div className="app" style={{ border:"1px solid black" ,
                                  width:"800px", 
                                  height:"700px" ,
                                  backgroundColor:"#dddddd",
                                  margin:"auto",
                                  padding:"20px",}}>
        <Header />
        <Navigation />
        <Main>
          
            <SubContents />
            <SubContents />
            <SubContents />
           
         
            <Advertisement />
        </Main>
{/* <MyButton />  */}
    </div>
  );
}
                
export default App;


