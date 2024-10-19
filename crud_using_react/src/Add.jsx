import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const Add = () => {
  const [userdata, setUserdata] = useState([])
  const [adddata, setAdddata] = useState({
    "name": "",
    "email": "",
    "phone": ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  useEffect(() => {
    axios.get("http://localhost:4000/userdata")
      .then(res => setUserdata(res.data))
  }, [userdata])
  const adduserData = () => {
    axios.post("http://localhost:4000/userdata", {
      name: adddata.name,
      email: adddata.email,
      phone: adddata.phone
    })
      .then(setShow(false))

  }
  const adddatachange = (e) => {
    setAdddata({ ...adddata, [e.target.name]: e.target.value })
    console.log(adddata)
  }

  return (
    <div>
      <button onClick={handleShow} className='btn btn-success my-3'>Add User</button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' onChange={adddatachange} placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' onChange={adddatachange} placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" name='phone' onChange={adddatachange} placeholder="Enter Your Phone Number" />
            </Form.Group>


            <Button variant="primary" onClick={adduserData}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )


}

export default Add;