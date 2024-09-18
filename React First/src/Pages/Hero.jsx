import "../assets/style.css";

const Hero=()=>{
    return(
        <>
          <div className="hero" id="hero">
            <div className="hero-left">
                <div style={{height:"10px",width:"200px",backgroundColor:"white",marginBottom:"50px"}}></div>
                <div className="hi">
                    I’m John, a Web Developer
                </div>
                <div className="para">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum
                    convallis lacus gravida.
                </div>
                <div className="scrolldown">

                    <a href="#"><i className="fa-solid fa-circle-chevron-down"></i></a>
                </div>
            </div>
            <div className="hero-right" >
                <div className="aboutme">
                    <div className="title1" style={{width:"500px"}}>
                        ABOUT ME
                    </div>
                    <div className="para1" style={{width:"500px"}}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum
                        convallis lacus gravida.
                    </div>
                    <a href="#" className="more1" style={{width:"500px"}}>
                        LEARN MORE 
                    </a>

                </div>
                <div className="mywork" style={{width:"500px"}}>
                    <div className="title1" style={{width:"500px"}}>
                        MY WORK
                    </div>
                    <div className="para1" style={{width:"500px"}}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum
                        convallis lacus gravida.

                    </div>
                    <a href="#" className="more1" style={{width:"500px"}}>
                        BROWSE PORTFOLIO 
                    </a>

                    <div className="follow" style={{width:"500px"}}>
                        FOLLOW ME
                    </div>
                    <div className="socialimage" style={{width:"500px"}}>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                    </div>

                </div>
            </div>
        </div>
        </>

    )
}
export default Hero;