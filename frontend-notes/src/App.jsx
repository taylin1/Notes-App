import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Dashboard from './pages/Dashboard'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
   </BrowserRouter>
      
    </>
  )
}

export default App
