import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
const Data = () => {
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/info').then((items)=>setJsonData(items.data));
    }, [])

  return (
    <>
    {
      jsonData.map((item)=>{
        return(
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {jsonData.age}
            </Card.Text>
            <Card.Title>{item.city}</Card.Title>
            <Card.Title>{item.email}</Card.Title>
          </Card.Body>
        </Card>
        )
      })
      
    }
    

    </>
  )
}

export default Data
