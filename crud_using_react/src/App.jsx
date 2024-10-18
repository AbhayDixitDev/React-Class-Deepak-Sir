import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar1 from './navbar.jsx'
import Home from './Home.jsx'
import Add from './Add.jsx'
import Search from './Search.jsx'
import Delete from './Delete.jsx'
import Update from './Update.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
