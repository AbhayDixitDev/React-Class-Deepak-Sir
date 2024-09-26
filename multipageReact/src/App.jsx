import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/navbar.jsx"
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Foxkit from "./pages/foxkit.jsx";
import Shop from "./pages/shop.jsx";
import Login from "./pages/login.jsx";
import Recover from "./pages/recover.jsx";
import Registration from "./pages/registration.jsx";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar1></Navbar1>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/foxkit" element={<Foxkit></Foxkit>}></Route>

          <Route path="/login"  element={<Login></Login>}></Route>
          <Route path="/registration"  element={<Registration></Registration>}></Route>
          <Route path="/recover"  element={<Recover></Recover>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}
export default App;