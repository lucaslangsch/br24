import { useState } from 'react'
import { Route, Routes } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
