import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConf, setPasswordConf] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, passwordConf };
        console.log("Welcome", newUser);
        //data clean up after form is submitted
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
    	setPasswordConf("");
    };
    
    return(
        < >
   
        <form id="formm" onSubmit={ createUser }>
            <div className="form-style">
                <label style={{flex:"1"}} >First Name</label> 
                <input style={{flex:"2"}} type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className="form-style">
                <label style={{flex:"1"}}>Last Name</label> 
                <input style={{flex:"2"}} type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className="form-style">
                <label style={{flex:"1"}}>Email Address: </label> 
                <input style={{flex:"2"}} type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="form-style">
                <label style={{flex:"1"}}>Password: </label>
                <input style={{flex:"2"}} type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="form-style">
                <label style={{flex:"1"}}>Confirm Password: </label>
                <input style={{flex:"2"}} type="password" value={passwordConf} onChange={ (e) => setPasswordConf(e.target.value) } />
            </div>
            
        </form>
    
    
        
        <h2>Your form data</h2>
        <div>First Name: { firstName }</div>
        <div>Last Name: { lastName }</div>
        <div>Email: { email }</div>
        <div>Password: { password }</div>
        <div>Confirm Password: { passwordConf }</div>
    
        </>
    );
};
    
export default UserForm;
