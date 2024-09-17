import "./style.css";

const Contact=()=>{
    return(
        <>
             <div className="layout" id="portfolio">
            <div className="layout-1">
                <div className="layout-1-1">
                    <div className="layout-1-1-1">
                        <div><img
                                src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/62326876f08f3412b5a688bf_john-carter-footer-avatar-developer-webflow-ecommerce-template.jpg"
                                alt=""/></div>
                        <div className="layout-name">
                            <div className="layout-name-1">John Carter</div>
                            <div className="layout-name-2">Head of Engineering at Google</div>
                        </div>
                    </div>
                    <div className="layout-1-1-2 ">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="layout-1-2">
                    <div className="layout-1-2-1">Get in touch<i className="fa-solid fa-arrow-right" style={{color:"blue"}}></i>
                    </div>
                    <div className="layout-1-2-2">
                        <div className="layout-1-2-2-1">
                            <div>Email Me:</div>
                            <div>contact@john.com<i className="fa-solid fa-arrow-right" style={{color:"white"}}></i></div>
                        </div>
                        <div className="layout-1-2-2-2">
                            <div>Call Me</div>
                            <div>(414) 977 - 048<i className="fa-solid fa-arrow-right" style={{color:"white"}}></i></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default Contact