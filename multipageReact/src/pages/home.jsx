import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
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

import gift11 from "../assets/images/home/gift11.png"
import gift12 from "../assets/images/home/gift12.png"
import gift21 from "../assets/images/home/gift21.jpeg"
import gift22 from "../assets/images/home/gift22.jpg"
import gift31 from "../assets/images/home/gift31.jpeg"
import gift32 from "../assets/images/home/gift32.jpeg"
import gift41 from "../assets/images/home/gift41.jpg"
import gift51 from "../assets/images/home/gift51.jpeg"
import gift52 from "../assets/images/home/gift52.jpeg"



const Home = () => {
  const [tentUrl1, settentUrl1] = useState(tent11);
  const [tentUrl2, settentUrl2] = useState(tent21);
  const [tentUrl3, settentUrl3] = useState(tent31);
  const image_12 = () => { settentUrl1(tent12); };
  const image_11 = () => { settentUrl1(tent11); };
  const image_22 = () => { settentUrl2(tent22); };
  const image_21 = () => { settentUrl2(tent21); };
  const image_32 = () => { settentUrl3(tent32); };
  const image_31 = () => { settentUrl3(tent31); };

  const [giftUrl1, setGiftUrl1] = useState(gift11);
  const [giftUrl2, setGiftUrl2] = useState(gift21);
  const [giftUrl3, setGiftUrl3] = useState(gift31);
  const [giftUrl4, setGiftUrl4] = useState(gift41);
  const [giftUrl5, setGiftUrl5] = useState(gift51);
  const gift_12 = () => { setGiftUrl1(gift12); };
  const gift_11 = () => { setGiftUrl1(gift11); };
  const gift_22 = () => { setGiftUrl2(gift22); };
  const gift_21 = () => { setGiftUrl2(gift21); };
  const gift_32 = () => { setGiftUrl3(gift32); };
  const gift_31 = () => { setGiftUrl3(gift31); };
  const gift_42 = () => { setGiftUrl4(gift41); };
  const gift_41 = () => { setGiftUrl4(gift41); };
  const gift_52 = () => { setGiftUrl5(gift52); };
  const gift_51 = () => { setGiftUrl5(gift51); };
  let tents = [
    {
      "id": "tent1",
      "src": tentUrl1,
      "image2": image_12,
      "image1": image_11,
      "productCategory": "TENTS",
      "productName": "Homecamp Tipi Tent",
      "productPrice": "$1,150.00"
    },
    {
      "id": "tent2",
      "src": tentUrl2,
      "image2": image_22,
      "image1": image_21,
      "productCategory": "TENTS",
      "productName": "Homecamp Classic Bell Tent",
      "productPrice": "$1,259.00"
    },
    {
      "id": "tent3",
      "src": tentUrl3,
      "image2": image_32,
      "image1": image_31,
      "productCategory": "TENTS",
      "productName": "Homecamp Tipi Tent Sand",
      "productPrice": "$899.00"
    },
  ];

  let nature=[
    {
      "src":nature1,
      "product":"Tents",
      "items":"4"
    },
    {
      "src":nature2,
      "product":"Lighting",
      "items":"1"
    },
    {
      "src":nature3,
      "product":"Gifts",
      "items":"5"
    },
    {
      "src":nature4,
      "product":"Chairs",
      "items":"1"
    },
    {
      "src":nature5,
      "product":"Blankets",
      "items":"1"
    }
  ];

  let gifts = [
    {
      "id": "gift1",
      "src": giftUrl1,
      "image2": gift_12,
      "image1": gift_11,
      "productCategory": "GIFTS",
      "productName": "Shopping Tote — Forest Green",
      "productPrice": "$50.00"
    },
    {
      "id": "gift2",
      "src": giftUrl2,
      "image2": gift_22,
      "image1": gift_21,
      "productCategory": "GIFTS",
      "productName": "Barebones Classic Work Glove — Olive",
      "productPrice": "$59.00"
    },
    {
      "id": "gift3",
      "src": giftUrl3,
      "image2": gift_32,
      "image1": gift_31,
      "productCategory": "GIFTS",
      "productName": "Barebones Garden Scoop",
      "productPrice": "$99.00"
    },
    {
      "id": "gift4",
      "src": giftUrl4,
      "image2": gift_42,
      "image1": gift_41,
      "productCategory": "GIFTS",
      "productName": "Hultafors Agdor Small Splitting Axe 0.9",
      "productPrice": "$49.00"
    },
    {
      "id": "gift5",
      "src": giftUrl5,
      "image2": gift_52,
      "image1": gift_51,
      "productCategory": "GIFTS",
      "productName": "Town & Country Tote",
      "productPrice": "$69.00"
    }
  ]


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

      <Container fluid>
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
          {tents.map(key => (
            <Col sm ><Card >
              <Card.Img variant="top" src={key.src} id={key.id} onMouseOver={key.image2}
                onMouseOut={key.image1} />
              <Card.Body style={{ display: "block", alignContent: "center", alignItems: "center", textAlign: "center" }}>
                <Card.Title >{key.productCategory}</Card.Title>
                <Card.Text>
                  {key.productName}
                </Card.Text>
                <Card.Text>
                  {key.productPrice}
                </Card.Text>
              </Card.Body>
            </Card></Col>
          ))}

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
          {
            nature.map(key=>(
              <Col xs={6} md={6} lg={2} xl={2} style={{ textAlign: "center" }}>
            <Image src={key.src} roundedCircle style={{ width: "150px", height: "150px" }} />
            <h4 style={{ marginTop: "20px" }}>{key.product}</h4>
            <h6>{key.items} Items</h6>
          </Col>
            ))
          }
        </Row>
      </div>

      <div className="bundle" fluid >
        <Row>
          <Col xs={12} md={12} lg={12} xl={6} className="bundle-img">
            <div className="cir1">
              <div className="wave-cir-con">
                <div className="sonar-wave"></div>
              </div>

            </div>
            <div className="box-1">
              <img src="https://skins.minimog.co/cdn/shop/products/17.jpg?v=1659520008&width=165" alt="" />
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
              <img src="https://skins.minimog.co/cdn/shop/products/2_6daa21be-f699-4b37-a72d-1a11da008dec.jpg?v=1659520534&width=165" alt="" />
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
              <img src="https://skins.minimog.co/cdn/shop/products/18b.jpg?v=1659520124&width=165" alt="" />
              <div className="box-3-1">
                <div>Homecamp Tipi Tent - Sand - 3.5m</div>
                <div>$899.00</div>
              </div>
            </div>
          </Col>
          <Col Col xs={12} md={12} lg={12} xl={6} div className="bundle-right" >
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
                alt="" /></div>
              <div className="br-3-3">Homecamp Tipi Tent - Sand - 3.5m</div>
              <div className="br-3-4">$899.00</div>
            </div>

            <div className="br-4"><a href="#">ADD TO CART | $2,507.00</a></div>
          </Col>
        </Row>
      </div>

      <CardGroup style={{ marginTop: "25px", marginBottom: "25px", marginLeft: "15px", marginRight: "15px" }}>
        <Row >
          <div className='d-flex justify-content-center align-items-center ' >
            <div className='text-dark text-align-center' style={{ alignContent: "center", alignItems: "center", textAlign: "center", marginBottom: "25px" }}>
              <h4 className='mb-1  ' >OUR PRODUCTS</h4>
              <h1 className='mb-1 '>Gifts Under $50</h1>
              <h5 className='mb-1 ' style={{ fontFamily: "serif" }}>Shop online for high-end bath accessories, bathroom sinks, vanities,<br /> shower faucets, & more fixtures</h5>
            </div>
          </div>
          {gifts.map(key => (
            <Col sm  xs={12} md={4} lg style={{ textAlign: "center" }}><Card >
              <Card.Img variant="top" src={key.src} id={key.id} onMouseOver={key.image2}
                onMouseOut={key.image1} />
              <Card.Body style={{ display: "block", alignItems: "center", textAlign: "center", height: "152px" }}>
                <Card.Title>{key.productCategory}</Card.Title>
                <Card.Text>
                  {key.productName}
                </Card.Text>
                <Card.Text>
                  {key.productPrice}
                </Card.Text>
              </Card.Body>
            </Card></Col>
          ))}
          <center>
            <Button variant="outline-dark" className="mx-auto" style={{ width: "120px", margin: "20px 0", marginLeft: "auto", marginRight: "auto" }}>SHOP NOW</Button>
          </center>
        </Row>


      </CardGroup>
    </>
  );

}

export default Home;