import React from 'react'
import LoginPage from './UIPages/LoginPage';
import "./App.css";

const App = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'radial-gradient(circle at top left, #0a0d1c, #040511)',
    }}>
      <LoginPage/>
    </div>
  )
}

export default App