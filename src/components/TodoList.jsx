import { TodoCard } from "./TodoCard";
export function TodoList(props) {
    // console.log(todos)
    const { todos,selectedTab,handleDeleteTodo,handleCompleteTodo } = props
    // console.log(todos,"i m todos from todolist.jsx")
    // console.log(todos,selectedTab,handleDeleteTodo,"debugging")
    // const {t} = todos
    // console.log(todos[0])
    const tab = selectedTab;
    const filterTodosList = tab === 'All' ?
        todos :
        tab === 'Open' ?
            todos.filter(val => !val.complete) :
            todos.filter(val => val.complete) //completed
    /*
    const todos= [
    {input:"Hello! Add Your first todo.", complete:true},
    {input:'Get the groceries.', complete:false},
    {input:'Learn how to web design.', complete:true},
    {input:'Say hi to gran gran.', complete:true}
    ]
    map kya karta hai puri array ko map karta hai apan jaise chahe waise
     */
    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                // console.log(todoIndex,"todoIndex of todoList")
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val=>val.input==todo.input)}
                        todo={todo}
                        handleDeleteTodo = {handleDeleteTodo}
                        handleCompleteTodo={handleCompleteTodo}/>
                )
            })}
        </>
    )
}
/*day-1:-
ise bhi bus export kiya abhi kuch likha nahi

jab bhi hume multiple line ka return statement dena rehta hai hai fragment use karte hai aur vo bhi parentheses ke andar

------------------day-2------------------------------------------------------------------
ye todolist todocards contain karegi
day-2 pe humne ye kiya ki humara upar ka strucutre to ban gaya tha par ab hume thoda aur deep dive karna tha to isliye humne todoCard banaye 
    abhi humne website static banayi hai bole to todos array humne already le rakhi hai to pehle hum iske liye bana rahe hai fir hum dhire se dynamically banayenge matlab jaise jaise user change karega vo aayega ye hum aage karenge

    to static ke liye to humne again mapping ka use kiya aur todos ko map kar diya
    matlab todos ek array hai objects ki and todos mai objects hai to task/todo hai so humne aisa kiya ki direct todos ko map kiya todo ke liye and todolist mai every todos object ko as a prop de diya
  */