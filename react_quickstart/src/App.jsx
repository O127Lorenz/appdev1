import AdminPanel from './AdminPanel'
import LoginForm from './LoginForm'
import { useState } from 'react'
import './App.css'

function App() {

const isLoggedIn = false;
  return (
    <div>
    {isLoggedIn ? (
      <AdminPanel />
    ) : (
      <LoginForm />
    )}
  </div>
  )

};

export default App
