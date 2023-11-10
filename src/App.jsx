import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Contacts from './views/Contacts'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
