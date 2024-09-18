import "../assets/style.css";


const Testimonials=()=>{
    return (
        <>
              <div className="testimonials">
            <div className="testimonials-1">
                <div className="testimonials-1-1">
                    <div className="testimonials-1-1-1"><span style={{color: "blue"}}>/</span> TESTIMONIALS</div>
                    <div className="testimonials-1-1-2">What the clients say about my work</div>
                </div>

                <div className="testimonials-1-2">Get in touch </div>
            </div>

            <div className="testimonials-2">
                <div className="testimonials-2-1"><img
                        src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/623207b88455ca2ac17ff73f_andy-smith-testimonial-photo-developer-webflow-ecommerce-template-p-800.jpeg"
                        alt=""/></div>
                <div className="testimonials-2-2">
                    <div className="testimonials-2-2-1"><img
                            src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/655682df9b7e461be82a4eaa_venture-logo-testimonial-developer-x-webflow-template.svg"
                            alt=""/></div>
                    <div className="testimonials-2-2-2">“John did an amazing work with our web-app, everything he did to
                        optimize our software help us to reduce our loading speed by 56%”</div>
                    <div className="testimonials-2-2-3"><span style={{color: "blue"}}>/</span> ANDY SMITH</div>
                    <div className="testimonials-2-2-4">VP OF DEVOPS AT VENTURE</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials;