import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './fanta.css'
/*
day-1:
dekho yaha createRoot(kuch hai) jo humare jsx se queryselector ka use karke sab kuch le raha hai aur use render kar raha hai
ques-1:- ye jsx kya hota hai?
jsx(javascript xml) bole to enhanced version for html

ques-2:- jsx ke kya fayde hai? aur react mai jsx kyu use kiya gaya?
jsx se fayda ye hua ki hum html me hi javascript use kar sakte hai
jsx bole to html and javascript ek saath use karna ek hi file mai... ab iski complexity hum kitni bhi badha sakte hai jaise jaise humara code large hota hai

dynamically attribute daal sakte hai hum html mai with help of jsx
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
