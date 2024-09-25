import { Link,Outlet } from "react-router-dom"
import "../assets/style.css"
const About=()=>{
    return (
        <>
        <h1>This is About Page</h1>
        <Link to="/about/student">Student</Link>
        <Link to="/about/teacher">Teacher</Link>
        <Link to="/about/staff">Staff</Link>
        <Outlet></Outlet>
        </>
    )
}

export default About