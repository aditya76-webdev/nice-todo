
export function TodoCard(props){
    const{todoIndex,todos} = props
    const todo = todos[todoIndex]
    // console.log(todo)
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button >
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
            
        </div>
    )
}
/*day-1:-
humne day-1 pe ek aur important chiz notice ki vo hai ki hum react mai export 2 tarah se kar sakte hai
1).export by function name (jise bolte hai named export ye best practice hai to humesha yehi use karna aisa chatgpt ne bola) named export mai hum function name ke aage export likhte hai
iska fayda ye hai ki hum ek .jsx file mai multiple functions bana sakte hai aur unhe export kar sakte hai... aur ek aur fayda jab bhi hum import karenge usi time pe hum different name bhi de sakte hai like myTodoCard bol sakte hai TodoCard ko.
wahi 
2). 2nd way hai export by default (isme humesha ek hi koi function export ho sakta hai multiple function export nahi ho sakte hai)... isme agar hume custom name dena ho to as use karna hota hai.

2
 */