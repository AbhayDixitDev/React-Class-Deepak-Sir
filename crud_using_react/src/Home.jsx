import axios from 'axios'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  let nav=useNavigate();
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/userdata")
        .then(res => setUserdata(res.data))
    }, [])

    const Delete = (id) => {
        axios.delete(`http://localhost:4000/userdata/${id}`)
            .then(res => {
                // Remove the deleted user from the state
                setUserdata(userdata.filter(user => user.id !== id));
            })
            .catch(err => console.error("Error deleting user:", err));
    }
    
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userdata.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={()=>nav(`/update/${user.id}`)}>Update</button>
                  <button onClick={()=>Delete(`${user.id}`)}>Delete</button>
                </td>

            </tr>
        ))}
      </tbody>
    </Table>
        </div>
    )
}

export default Home;