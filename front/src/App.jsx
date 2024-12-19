import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home'
import Companies from './pages/companies'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={< Companies />} />
    </Routes>
  )
}

export default App
