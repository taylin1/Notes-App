import './App.css'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import Dashboard from './Pages/Dashboard'
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
