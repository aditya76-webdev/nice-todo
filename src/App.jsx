import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
function App() {
  const todos= [
    {input:"Hello! Add Your first todo.", complete:true},
    {input:'Get the groceries.', complete:false},
    {input:'Learn how to web design.', complete:true},
    {input:'Say hi to gran gran.', complete:true}
  ]
  return (
    
    <>
      
      <Header todos={todos}/> 
      <Tabs todos ={todos}/>
      <TodoList todos ={todos}/>
      <TodoInput todos ={todos}/>
    </>
  )
}

export default App
/* trunk-ignore-all(prettier) */
/*
    /* trunk-ignore(git-diff-check/error) */
      /* Aditya tutorial
      Day-1
      1).sara mamla app.jsx se hi chalu hota hai to baat aisi hai ki sabse pehle hum app.jsx mai jo bhi return ke andar html likhte hai to vo hum directly screen par dekh sakte hai for ex- app.jsx ke return mai likho i m aditya h1 ke andar to ye tumhe directly screen par dikh jayega...

      2). par ab yaha aata hai dusra lafda bole to ab hum jo bhi show karenge vo screen par dikhega par jaisa ki hume pata hai ki function single thing hi return karta hai multiple chize return nahi karta to hum return ke andar h1, h2, h3 ye sab alag alag kaise likhe?
      3). so iss problem ko solve karne ke liye humare pass aati hai react ki suvidha bole to fragmentation ya fir div tag.. to humko multiple tags display karne hai to hum div tag ka use kar sakte hai but app.jsx already main.jsx ke div tag ke andar hoti hai jiss karan unnecessary nested div tags ban jayenge to iske liye hum fragmentation ka use karte hai <></> ise bolte hai fragmentation 

      4). app.jsx humara index.html ki tarah hai so ispe hum faltu ghichud pichud nahi karte hai so uske liye hum banate hai components-> components bole to ek human body hai vo humara app.jsx file ho gayi now iske andar sir hai-> to ye header.jsx ho gayi. 
      pet hai-> to ye main.jsx ho gayi.
      laat hai-> to ye footer.jsx ho gayi
      waise hi haath  hai -> to ye tabs.jsx ho gayi.
      isi tarah humare react mai bhi kaam chalta hai..
      jaise body puri banane ke liye 
      i). body.jsx(corr. to -> app.jsx)
          body.jsx ke andar:- this all are components 
            a). header.jsx
              now head hai to isme bhot saari chize aayengi jaise naak, kaan,lips etc
              1). naak.jsx 
              2). kaan.jsx
              3).lips.jsx
              1). naak.jsx ,2). kaan.jsx,3).lips.jsx ab ye teeno alag alag files hai par inn teeno ko as a component hum header.jsx mai use karenge
            b). main.jsx
            c). footer.jsx 

            ab agar acche se visualize kiya jaaye to ye tree ban jayega

            ab jaise naak ki functionaliye hoti hai to iski functionality hum naak.jsx mai likhenge return() ke bahar aur 
            demo:-
            export functino naak(){
              yaha naak ki functionality aayegi jaise
              const naakhole = [1,2]
            return({
            yaha pe hum html likhte hai bole to vo sab chiz jo hum screen par dikhana chahte hai
            to yaha
            <>
            naakhole={naakhole}</> aise javascript use karte hai.
            })}
        
      
      
      
      1).ye humne jo todos={todos} kiya hai isme humne todos lhs wala ye ek variable banaya hai jo store karega javascript ko aur dusri baat ye as a parameter kaam karega matlab ab jab hum header component mai jayenge to ye todos as a parameter le sakte hai  */
      /* trunk-ignore(git-diff-check/error) */
      /* 2).{todos} rhs wala to ye humari javascript hai so jab bhi hum javascript ko html bole to return tag ke andar use karna chahte hai to hume curly braces ka use karna hoga
      3). jsx kise bolte hai? to jsx is html+js so jitna bhi kuch return ke andar likha rehta hai vo html rehta hai aur return ke bahar hum javascript likh sakte hai aur vo bahar likhi hui javascript ko use karne ke liye hum curly braces ka use karte hai 
      */