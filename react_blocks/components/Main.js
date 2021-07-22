import React from 'react';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

const Main = ()=> {


    return(
        <div className="main" style={{
            border:"1px solid black",
            backgroundColor:"#e06666",
            height:"500px",
            width:"550px",
            display:"inline-block",
            verticalAlign:"top",
            padding:"14px",
        
        }}>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
            
        </div>
    )
}

export default Main;