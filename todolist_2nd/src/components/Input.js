import React,{ useState } from 'react';

const Input = (props) => {
    const { todoList, setTodoList} = props;
    // newtodo and setNewtodo is not lifted up to App.js because it is only an input that is useful in this Input component only
    const [newtodo, setNewtodo] = useState("");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newtodo.length === 0) {
            return;
        }
        //create an object to incorporate two separate states
        const myNewtodo = {
            newtodo:newtodo,
            complete: false,
        }
        // settodoList([newtodo, ...todoList])
        setTodoList([myNewtodo, ...todoList]);

        setNewtodo("");
        

       
    }

   
    
    return (
        <div>
            
            <form onSubmit = { handleSubmit }>
                {
                    newtodo.length > 0 && newtodo.length < 6 ?
                    <span style={{color:"red"}}>Your new list must be at least 6 characters</span>
                    : null
                }
                <p>
                
                <input style={{fontSize:"30px",
                        backgroundColor:"#EFEFEF", 
                                border:"0px", 
                                borderRadius:"4px",
                            }}type="text"
                        name="newtodo"
                        value = { newtodo }
                        onChange = { (e)=> setNewtodo(e.target.value)} />
                        <button style={{fontSize:"30px",
                                    backgroundColor:"#0019F8",
                                    color:"white",
                                    borderRadius:"4px",
                                    border:"0px",
                                    }}>  Add List</button>
                </p>
                
               
            </form>
            
            
           
        

        </div>
    )
}

export default Input;