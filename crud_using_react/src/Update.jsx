import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Update = () => {
    let nav=useNavigate()
    let {id}=useParams();
    // const [userdata, setUserdata] = useState([])
  const [adddata, setAdddata] = useState({
    "name": "",
    "email": "",
    "phone": ""
  })

  useEffect(() => {
    axios.get(`http://localhost:4000/userdata/${id}`)
      .then(res => setAdddata(res.data))
      .then(console.log(adddata))
  }, [])


    const adddatachange = (e) => {
        setAdddata({ ...adddata, [e.target.name]: e.target.value })
        // console.log(adddata)
      }
    const Update1 = () => {
        axios.put(`http://localhost:4000/userdata/${id}`, JSON.stringify(adddata))
            .then(res => {
                console.log(res);
                alert("Data updated successfully!");
            })
            .then(nav("/"))            
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' value={adddata.name} onChange={adddatachange} placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' value={adddata.email} onChange={adddatachange} placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" name='phone' value={adddata.phone} onChange={adddatachange} placeholder="Enter Your Phone Number" />
            </Form.Group>


            <Button variant="primary" onClick={Update1}>
              Update
            </Button>
          </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Update;