import { TodoCard } from "./TodoCard";
export function TodoList(props){
    // console.log(todos)
    const {todos} = props
    // console.log(todos)
    // const {t} = todos
    // console.log(todos[0])
    const tab = 'All';
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
            {todos.map((todo,todoIndex)=>{
                return(
                    <TodoCard key={todoIndex} todoIndex = {todoIndex} {...props}/>
                )
            })}
        </>
    )
}
/*day-1:-
ise bhi bus export kiya abhi kuch likha nahi

jab bhi hume multiple line ka return statement dena rehta hai hai fragment use karte hai aur vo bhi parentheses ke andar*/