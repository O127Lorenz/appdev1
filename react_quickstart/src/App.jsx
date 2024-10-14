import AdminPanel from './AdminPanel'
import LoginForm from './LoginForm'
import { useState } from 'react'
import './App.css'

function App() {


  return (
   <MyButton/>
  )

};
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

  


  




export default App
