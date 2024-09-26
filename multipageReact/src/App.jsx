import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/navbar.jsx"
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Foxkit from "./pages/foxkit.jsx";
import Shop from "./pages/shop.jsx";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar1></Navbar1>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/foxkit" element={<Foxkit></Foxkit>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}
export default App;