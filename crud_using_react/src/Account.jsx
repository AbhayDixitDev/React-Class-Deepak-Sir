import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

// MAKE A LOGIN form which can get value of user types from form to api data if match it will pass true value to localstorage that user is logged in other wise redirect it to login page
const Account = () => {
    let api="http://localhost:4000/userdata";
    const [data,setData]=useState([]);
    const [login,setLogin]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [user,setUser]=useState({});


    useEffect(()=>{
        fetch(api).then((res)=>res.json()).then((data)=>setData(data));

    },[])
    return(
        <Container>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
            </Form>

        </Container>
    )  



}
export default Account;
