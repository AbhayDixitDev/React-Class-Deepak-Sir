import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBTypography
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"

import brand1 from "../assets/images/home/brand1.avif";
import brand2 from "../assets/images/home/brand2.webp"
import brand3 from "../assets/images/home/brand3.avif"
import brand4 from "../assets/images/home/brand4.avif"
import brand5 from "../assets/images/home/brand5.avif"


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import tent11 from "../assets/images/home/tent11.jpeg"
// import tent12 from "../assets/images/home/tent12.jpeg"
import tent21 from "../assets/images/home/tent21.jpeg"
// import tent22 from "../assets/images/home/tent22.jpeg"
import tent31 from "../assets/images/home/tent31.jpeg"
// import tent32 from "../assets/images/home/tent32.jpeg"

import { Button } from 'react-bootstrap';


const Home = () => {
    return (
        <>
            <header>
            <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: 'url("https://skins.minimog.co/cdn/shop/files/camping_hero.jpg?v=1659941685&width=1550")', height: '650px' }}
      >
        <div className='mask' >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 display-1' >Camping</h1>
              <h4 className='mb-1 display-6'>Homecamp source the best in honestly crafted, <br/>useful
              goods to inspire an outdoor lifestyle.</h4>
              <MDBBtn tag="a" outline size="lg" style={{marginTop:"20px"}}>
                <Link to="/shop" id='shopbtn' style={{color:"white"}}>Shop Now</Link>
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <Container>
      <Row>
        <Col sm><img src={brand1} className='containbrand' /></Col>
        <Col sm><img src={brand2} className='containbrand' /></Col>
        <Col sm><img src={brand3} className='containbrand' /></Col>
        <Col sm><img src={brand4} className='containbrand' /></Col>
        <Col sm><img src={brand5} className='containbrand' /></Col>

      </Row>
    </Container>

    <CardGroup>
        <Row>
            <Col sm><Card>
        <Card.Img variant="dark" src={tent11} id="tent1" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Homecamp Tipi Tent
          </Card.Text>
          <Card.Text>
          $1,150.00
          </Card.Text>
        </Card.Body>
      </Card></Col>
            <Col sm><Card>
        <Card.Img variant="top" src={tent21}  id="tent2"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Homecamp Classic Bell Tent          
          </Card.Text>
          <Card.Text>
          $1,259.00
          </Card.Text>
        </Card.Body>
      </Card></Col>
            <Col sm> <Card>
        <Card.Img variant="top" src={tent31} id='tent3'/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Homecamp Tipi Tent Sand
          </Card.Text>
          <Card.Text>
          $899.00
          </Card.Text>
        </Card.Body>
      </Card></Col>
      
        </Row>
        <Button variant="outline-dark" class="mx-auto" style={{width:"100px",margin:"20px 0",marginLeft:"auto",marginRight:"auto"}}>Dark</Button>
    </CardGroup>

        </>
    );

}

export default Home;