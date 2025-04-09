import { useState } from "react"

/* day-1
same yaha bhi export function  */
export function TodoInput(props){
    const {handleAddTodo} = props
    // console.log(handleAddTodo, "i m handleAddTodo")
    const [inputValue, setInputValue] = useState('')
    // console.log(inputValue)
    return(
        <div className="input-container">
            <input type="text" placeholder="Add task" value={inputValue} onChange={(e)=>{
                
                setInputValue(e.target.value)
                // setvalue('')
            }}/>
            <button onClick={
                ()=>{if(!inputValue){
                    return
                }
                    handleAddTodo(inputValue)
                    setInputValue('')
                
                
            }
            }>
                <i className="fa-solid fa-plus"></i>
            </button>
            
        </div>
    )
}
