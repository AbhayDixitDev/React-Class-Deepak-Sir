import { useSelector } from "react-redux"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Showitem = ({ name, ...props })=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const cartdata = useSelector((state)=>state.ecom.items)
    return(
        <>
         <Button variant="danger" onClick={handleShow} className="me-2"> Cart<sup>{cartdata.length}</sup>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <section style={{"display":"grid","gridTemplateColumns":"auto auto auto","justifyContent":"space-evenly"}}>
        {
            cartdata.map((items)=><Card  key={items.id} style={{ width: '18rem',"margin":"30px" }}>
            <Card.Img variant="top" src={items.imageurl} />
            <Card.Body>
              <Card.Title>{items.pname}</Card.Title>
              <Card.Title>{items.bname}</Card.Title>
              <Card.Title>{items.pprice}</Card.Title>
            </Card.Body>
          </Card>)
               
        }
    </section>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}





function Example() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <Showitem key={idx} placement={placement}  /> 
      ))} 
    </>
  );
}

export default Example

