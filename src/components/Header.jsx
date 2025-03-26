export function Header(props){ // isme arguments mai jo props diya hai use props propogation bolte hai
    const {todos} = props // {todos}ise destructuring bolte hai matlab humko jo props mila use destructure karna 
    const todoslength = todos.length; // now humne destructure kiya hai jo bhi prop now use information le sakte hai hum to ise bolte hai using props for our valuable purpose
    const isTaskPlural = todos.length>1; // using props 
    const taskOrTasks = isTaskPlural?'tasks':'task'

    return(
        <header>
            <h1 className="text-gradient">You have {todoslength} open {taskOrTasks}.</h1>
        </header>
    )
}
/* 1). haa to hum export function ye isliye use karte hai jisse hum vo function ko export kar sake bole to humne vo function mai jo bhi likha hai sab export ho jayega

    2). Agar function mai upar se papa/parent file ne kuch bheja hai to hum use directly as a parameter le sakte hai jaisa ki humne yaha pe liya hai dekho props ko as a parameter liya hai humne aur use use kar sakte hai.... 
    3). ab use use karne ke different ways ho sakte hai jaise ki 
    i). use unpack kar lena (destructuring) jaisa ki humne yaha kiya(ye dekho https://www.youtube.com/watch?v=te3YdkP2aCk)
    destructuring hum redundancy bachane ke liye karte hai
    ii). directly .(dot) ka use karke props se chizo ko access kar lena.
    iii). hum directly parameter mai bhi destructuring karke bhej sakte hai.

    jaisa ki hum yaha dekh sakte humne javascript saari bahar likhi hai aur html return ()ke andar likhi hai
    */