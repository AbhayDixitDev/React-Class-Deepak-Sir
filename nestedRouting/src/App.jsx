import Navbar1 from "./component/navbar"
import Home from "./pages/Home"
import Service from "./pages/service"
import Contact from "./pages/contact"
import About from "./pages/about"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Student from "./pages/student"
import Teacher from "./pages/teacher"
import Staff from "./pages/staff"
import "./assets/style.css"
const App=()=>{
  return (

    <>
     <BrowserRouter>
     <Navbar1></Navbar1>
     <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/about" element={<About/>}>

      <Route path="/about/teacher" element={<Teacher></Teacher>}></Route>
      <Route path="/about/student" element={<Student></Student>}></Route>
      <Route path="/about/staff" element={<Staff></Staff>}></Route>

    
      </Route>

      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>    
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App