import React, { useState } from 'react';
    
const BoxForm = (props) => {
    const { boxLst, setBoxLst } = props;
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
//add new color at the end of current box list
        setBoxLst( [...boxLst, color]);
        setColor("");

    };
    
    return (
    
        <form onSubmit={ handleSubmit } style={{textAlign:"center", marginTop:"50px"}}>
            <label style={{marginRight:"10px",fontSize:"30px"}}>Color</label> 
            <input type="text" 
                    value= { color } 
                    style={{fontSize:"30px"}}
                    onChange={ (e) => setColor(e.target.value)} />
            
            <input type="submit" value="Add" style={{fontSize:"30px"}}/>
        </form>

    );
};
    
export default BoxForm;
