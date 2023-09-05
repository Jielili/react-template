import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default App
