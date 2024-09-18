import Navbar from "./Components/Navbar.jsx";
import Hero from "./Pages/Hero.jsx";
import AboutMe from "./Pages/AboutMe.jsx";
import Skills from "./Pages/Skills.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import Form from "./Pages/Form.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar1 from "./Components/navbar1.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
    <Navbar1></Navbar1>
     <Navbar></Navbar>
     <Hero></Hero>
     <AboutMe></AboutMe>
     <Skills></Skills>
     <Testimonials></Testimonials>
     <Form></Form>
     <Contact></Contact>
     <Footer></Footer>
    </>
  )
}

export default App
