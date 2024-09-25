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
import Image from 'react-bootstrap/Image';
import "./home.css"

import brand1 from "../assets/images/home/brand1.avif";
import brand2 from "../assets/images/home/brand2.webp"
import brand3 from "../assets/images/home/brand3.avif"
import brand4 from "../assets/images/home/brand4.avif"
import brand5 from "../assets/images/home/brand5.avif"


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import tent11 from "../assets/images/home/tent11.jpeg"
import tent12 from "../assets/images/home/tent12.jpeg"
import tent21 from "../assets/images/home/tent21.jpeg"
import tent22 from "../assets/images/home/tent22.jpeg"
import tent31 from "../assets/images/home/tent31.jpeg"
import tent32 from "../assets/images/home/tent32.jpeg"

import { Button } from 'react-bootstrap';

import nature1 from "../assets/images/home/nature1.jpg"
import nature2 from "../assets/images/home/nature2.jpg"
import nature3 from "../assets/images/home/nature3.jpg"
import nature4 from "../assets/images/home/nature4.jpg"
import nature5 from "../assets/images/home/nature5.jpg"


const Home = () => {
  const [imageUrl1, setImageUrl1] = useState(tent11);
  const [imageUrl2, setImageUrl2] = useState(tent21);
  const [imageUrl3, setImageUrl3] = useState(tent31);
  const image_12 = () => { setImageUrl1(tent12); };
  const image_11 = () => { setImageUrl1(tent11); };
  const image_22 = () => { setImageUrl2(tent22); };
  const image_21 = () => { setImageUrl2(tent21); };
  const image_32 = () => { setImageUrl3(tent32); };
  const image_31 = () => { setImageUrl3(tent31); };

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
                <h4 className='mb-1 display-6'>Homecamp source the best in honestly crafted, <br />useful
                  goods to inspire an outdoor lifestyle.</h4>
                <MDBBtn tag="a" outline size="lg" style={{ marginTop: "20px" }}>
                  <Link to="/shop" id='shopbtn' style={{ color: "white" }}>Shop Now</Link>
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Container>
        <Row className='d-flex justify-content-center align-items-center '>
          <Col sm xs={6} md={4} lg={2} xl={2}><img src={brand1} className='containbrand' /></Col>
          <Col sm xs={6} md={4} lg={2} xl={2}><img src={brand2} className='containbrand' /></Col>
          <Col sm xs={6} md={4} lg={2} xl={2}><img src={brand3} className='containbrand' /></Col>
          <Col sm xs={6} md={4} lg={2} xl={2}><img src={brand4} className='containbrand' /></Col>
          <Col sm xs={6} md={4} lg={2} xl={2}><img src={brand5} className='containbrand' /></Col>

        </Row>
      </Container>

      <CardGroup style={{ marginTop: "25px", marginBottom: "25px", marginLeft: "15px", marginRight: "15px" }}>
        <Row >
          <div className='d-flex justify-content-center align-items-center ' >
            <div className='text-dark text-align-center' style={{ alignContent: "center", alignItems: "center", textAlign: "center", marginBottom: "25px" }}>
              <h4 className='mb-1  ' >OUR PRODUCTS</h4>
              <h1 className='mb-1 '>INSPIRED BY YOU </h1>
              <h5 className='mb-1 ' style={{ fontFamily: "serif" }}>Shop online for high-end bath accessories, bathroom sinks, vanities,<br /> shower faucets, & more fixtures</h5>
            </div>
          </div>
          <Col sm ><Card >
            <Card.Img variant="top" src={imageUrl1} id="tent1" onMouseOver={image_12}
              onMouseOut={image_11} />
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
          <Col sm><Card >
            <Card.Img variant="top" src={imageUrl2} id="tent2" onMouseOver={image_22}
              onMouseOut={image_21} />
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
          <Col sm> <Card >
            <Card.Img variant="top" src={imageUrl3} id="tent3" onMouseOver={image_32}
              onMouseOut={image_31} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Homecamp Tipi Tent Sand
              </Card.Text>
              <Card.Text>
                $899.00
              </Card.Text>
            </Card.Body>
          </Card>

          </Col>
          <center>
            <Button variant="outline-dark" className="mx-auto" style={{ width: "120px", margin: "20px 0", marginLeft: "auto", marginRight: "auto" }}>SHOP NOW</Button>
          </center>
        </Row>
        

      </CardGroup>

      <div style={{ backgroundColor: "#f1f1f1", marginTop: "25px", paddingBottom: "50px" }} >
        <Row className='d-flex justify-content-center align-items-center ' style={{ width: "100%" }} >
          <div className='d-flex justify-content-center align-items-center ' style={{ marginTop: "50px" }}>
            <div className='text-dark text-align-center' style={{ alignContent: "center", alignItems: "center", textAlign: "center", marginBottom: "25px" }}>
              <h6 className='mb-1 ' style={{ color: "red" }} >AS NATURE LOVERS</h6>
              <h1 className='mb-1 '>We want you to enjoy the bush, beach and <br /> garden with quality gear. </h1>
            </div>
          </div>
          <Col xs={6} md={6} lg={2} xl={2} style={{ textAlign: "center" }}>
            <Image src={nature1} roundedCircle style={{width:"150px",height:"150px"}}/>
            <h4 style={{ marginTop: "20px" }}>Tents</h4>
            <h6>4 Items</h6>
          </Col>
          <Col xs={6} md={6} lg={2} xl={2} style={{ textAlign: "center" }}>
            <Image src={nature2} roundedCircle style={{width:"150px",height:"150px"}}/>
            <h4 style={{ marginTop: "20px" }}>Lighting</h4>
            <h6>1 Items</h6>
          </Col>
          <Col xs={6} md={6} lg={2} xl={2} style={{ textAlign: "center" }}>
            <Image src={nature3} roundedCircle style={{width:"150px",height:"150px"}}/>
            <h4 style={{ marginTop: "20px" }}>Gifts</h4>
            <h6>5 Items</h6>
          </Col>
          <Col xs={6} md={6} lg={2} xl={2} style={{ textAlign: "center" }}>
            <Image src={nature4} roundedCircle style={{width:"150px",height:"150px"}}/>
            <h4 style={{ marginTop: "20px" }}>Chairs</h4>
            <h6>1 Items</h6>
          </Col>
          <Col xs={6} md={6} lg={2} xl={2} style={{ textAlign: "center" }}>
            <Image src={nature5} roundedCircle style={{width:"150px",height:"150px"}}/>
            <h4 style={{ marginTop: "20px" }}>Blankets</h4>
            <h6>1 Items</h6>
          </Col>
        </Row>
      </div>

      <div className="bundle">
       <Row>
         <Col xs={12} md={12} lg={12} xl={6}>
         <div className="bundle-img">
            <div className="cir1">
                <div className="wave-cir-con">
                    <div className="sonar-wave"></div>
                </div>

            </div>
            <div className="box-1">
                <img src="https://skins.minimog.co/cdn/shop/products/17.jpg?v=1659520008&width=165" alt=""/>
                <div className="box-1-1">
                    <div>Homecamp Classic Bell Tent</div>
                    <div>$1,259.00</div>
                </div>
            </div>
            <div className="cir2">

                <div className="wave-cir-con">
                    <div className="sonar-wave"></div>
                </div>

            </div>

            <div className="box-2">
                <img src="https://skins.minimog.co/cdn/shop/products/2_6daa21be-f699-4b37-a72d-1a11da008dec.jpg?v=1659520534&width=165" alt=""/>
                <div className="box-2-1">
                    <div>Homecamp Fenby Camp Chair - Desert Khaki
                        </div>
                    <div>$349.00</div>
                </div>
            </div>

            

            <div className="cir3">

                <div className="wave-cir-con">
                    <div className="sonar-wave"></div>
                </div>

            </div>
            <div className="box-3">
                <img src="https://skins.minimog.co/cdn/shop/products/18b.jpg?v=1659520124&width=165" alt=""/>
                <div className="box-3-1">
                    <div>Homecamp Tipi Tent - Sand - 3.5m</div>
                    <div>$899.00</div>
                </div>
            </div>
        </div>
         </Col>
        <Col xs={12} md={12} lg={12} xl={6}>
        <div className="bundle-right">
            <div className="br-1">BUNDLE & SAVE</div>
            <div className="br-2">BUILD YOUR BUNDLES</div>
            <div className="br-3">
                <div className="br-3-1">1</div>
                <div className="br-3-2"><img
                        src="https://skins.minimog.co/cdn/shop/products/2_6daa21be-f699-4b37-a72d-1a11da008dec.jpg?v=1659520534&width=165"
                        alt="" /></div>
                <div className="br-3-3">Homecamp Fenby Camp Chair - Desert Khaki</div>
                <div className="br-3-4">$349.00</div>
            </div>

            <div className="br-3">
                <div className="br-3-1">2</div>
                <div className="br-3-2"><img src="https://skins.minimog.co/cdn/shop/products/17.jpg?v=1659520008&width=165"
                        alt="" /></div>
                <div className="br-3-3">Homecamp Classic Bell Tent</div>
                <div className="br-3-4">$1259.00</div>
            </div>

            <div className="br-3">
                <div className="br-3-1">3</div>
                <div className="br-3-2"><img src="https://skins.minimog.co/cdn/shop/products/18b.jpg?v=1659520124&width=165"
                        alt=""/></div>
                <div className="br-3-3">Homecamp Tipi Tent - Sand - 3.5m</div>
                <div className="br-3-4">$899.00</div>
            </div>

            <div className="br-4"><a href="#">ADD TO CART | $2,507.00</a></div>
        </div>
        </Col>
       </Row>
    </div>
    </>
  );

}

export default Home;