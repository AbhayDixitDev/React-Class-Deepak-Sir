import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
const Home = () => {
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/userdata")
        .then(res => setUserdata(res.data))
    }, [])
    return (
        <div>
            <h3>Home</h3>
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
        </div>
    )
}

export default Home;