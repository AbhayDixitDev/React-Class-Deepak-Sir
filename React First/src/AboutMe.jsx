import "./style.css";

const AboutMe=()=>{
    return(
        <>
         <div className="about-me-container" id="about">
            <div className="about-me">
                <div className="about-me-left">
                    <div className="about-me-left-1"><span>/</span>ABOUT ME</div>
                    <div className="about-me-left-2">I've been developing websites since 2010</div>
                    <div className="about-me-left-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat.</div>
                    <div className="about-me-left-4"><a href="">More about me <i className="fa-solid fa-arrow-right"></i> </a>
                    </div>
                    <h1 className="moreaboutbar"></h1>

                </div>
                <div className="about-me-right">
                    <div className="about-me-right-1">
                        <div className="about-me-right-1-grid">
                            <div className="about-me-right-1-grid-1">
                                <div className="about-me-right-1-grid-1-1">12</div>
                                <div className="about-me-right-1-grid-1-2">Years of experience</div>
                            </div>
                            <div className="about-me-right-1-grid-2">
                                <div className="about-me-right-1-grid-2-1">150</div>
                                <div className="about-me-right-1-grid-2-2">Successful projects</div>
                            </div>

                        </div>
                        <div className="about-me-right-1-para">
                            Lorem ipsum dolor sit amets consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation.
                        </div>
                    </div>

                </div>

            </div>
            <div className="about-footer">
                <div className="about-footer-1">PREVIOSLY WORKED ON</div>
                <div className="about-footer-2">
                    <div className="about-footer-2-img"><img
                            src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/655682dff74f0dc9ca5a4e5e_company-logo-developer-x-webflow-template.svg"
                            alt=""/></div>
                    <div className="about-footer-2-img"><img
                            src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/655682df2db8715a848d0741_venture-logo-developer-x-webflow-template.svg"
                            alt=""/></div>
                    <div className="about-footer-2-img"><img
                            src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/655682df839aa1093b52eb18_studio-logo-developer-x-webflow-template.svg"
                            alt=""/></div>
                    <div className="about-footer-2-img"><img
                            src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/655682df17fa4dba2950055b_business-logo-developer-x-webflow-template.svg"
                            alt=""/></div>
                </div>
            </div>
        </div>
        </>
    )
};


export default AboutMe;
