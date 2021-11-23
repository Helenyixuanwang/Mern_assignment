import React  from 'react';

const Display = (props)=> {
    const { todoList, setTodoList} = props;
    
    
    const handleRemoveTodo = (index) => {
        // filter function returns a new array with all items in skillArr whose index does NOT include
        // the skill we want to delete from state
        const filteredArr = todoList.filter((item, idx) => idx !== index);
        // set skillArr with new array
        setTodoList(filteredArr);
      };
      const handleCheckbox = (index) => {
          //i is index and it is the second augument in map function
          const updateTodos = todoList.map((todo, i) => {
              if (i === index) {
                  todo.complete = !todo.complete
                  //avoid mutating the todo directly, do this
                //   const updatedTodo = { ...todo, complete: !todo.complete};
                //   return updatedTodo
              }
            return todo;
          })
          setTodoList(updateTodos)
      }
     


    return (
        <div >
            <h2>All todo list</h2>
        {
            todoList.map((lst,index) => (
                

                <div key={ index } style={{width:"550px", 
                                            height:"40px",
                                            // border:"1px solid blue",  
                                            margin:"5px auto",
                                            fontSize:"20px",
                                            textAlign:"left",
                                            display:"flex",
                                            wordWrap:"break-word",
                                            }}>
                    <div style={{flex:"5"}}>
                    <input type="checkbox" checked={ lst.complete } name="finish"
                    onChange={(event)=>handleCheckbox(index)} 
                    /> {
                    lst.complete? 
                    <span style={{ textDecoration:"line-through",fontSize:"25px"}}> {lst.newtodo }</span>
                    :<span style={{fontSize:"25px"}}>  {lst.newtodo }</span>
                    }  
                    </div>
                    <button style={{backgroundColor:"red", 
                            border:"0px",
                            borderRadius:"4px",
                            fontSize:"25px",
                            color:"white",
                            flex:"1",
                            }}onClick={() => handleRemoveTodo(index) }>   Delete </button>
                </div>
              
            ))
        }
        </div>
    )
}

export default Display;