import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConf, setPasswordConf] = useState("");  
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfError, setPasswordConfError] = useState("");
    

    
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
        setHasBeenSubmitted(true);
    };
    
    //handle email
    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5?
         setEmailError("Email must be 5 characters or longer!")
         : setEmailError("");
        }
    
    //handle firstName and lastName
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }
    // handle password
    const handlePassword = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8?
         setPasswordError("Password must be 8 characters or longer!")
         : setPasswordError("");
        }
        // handle password confirmation
    const handlePasswordConf = (e) => {
            setPasswordConf(e.target.value);
            e.target.value.length > 8 || (e.target.value !== password)?
             setPasswordConfError("Password confirmation must be 8 characters or longer and match!")
             : setPasswordConfError("");
            
            }

        
    return(
        < >
   
        <form id="formm" onSubmit={ createUser }>
            {
                hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3> 
            }
            {/* first name error report here above first name input*/}
             {
                    firstNameError ?
                    <span style={{ color:"red",textAlign:"right"}}>{ firstNameError }</span> :
                    ''
                }
          
            <div className="form-style">
           
                <label style={{flex:"1"}} >First Name</label> 
                <input style={{flex:"2"}} type="text" value={firstName} onChange={ handleFirstName } />
                
            </div>
            {/* last nanme error report here abvoe last name input */}
            {
                    lastNameError ?
                    <span style={{ color:"red",textAlign:"right"}}>{ lastNameError }</span> :
                    ''
                }
            <div className="form-style" >
                <label style={{flex:"1"}}>Last Name</label> 
                <input style={{flex:"2"}} type="text" value={lastName} onChange={ handleLastName } />
            </div>
            {/* email error */}
                {
                    emailError ?
                    <span style={{ color:"red",textAlign:"right"}}>{ emailError }</span> :
                    ''
                }
            <div className="form-style">
                <label style={{flex:"1"}}>Email Address: </label> 
                <input style={{flex:"2"}} type="email" value={email} onChange={ handleEmail } />
            </div>
            {/* handle password, passwordConf input and match here */}
            {
                    passwordError  ?
                    <span style={{ color:"red",textAlign:"right"}}>{ passwordError }</span> :
                    ''
                }
            <div className="form-style">
                <label style={{flex:"1"}}>Password: </label>
                <input style={{flex:"2"}} type="password" value={password} onChange={ handlePassword } />
            </div>
            {
                    passwordConfError ?
                    <span style={{ color:"red",textAlign:"right"}}>{ passwordConfError }</span> :
                    ''
                    

                }
            <div className="form-style">
                <label style={{flex:"1"}}>Confirm Password: </label>
                <input style={{flex:"2"}} type="password" value={passwordConf} onChange={ handlePasswordConf } />
            </div>
            <input type="submit" value="Create User" />
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
