import "./style.css";

const Form = () => {
    return (
        <>
            <div className="form" id="form">
                <div className="form-left">
                    <div style={{ height: "5px", backgroundColor: "white" }}></div>
                    <div>Interested in working together?
                        Let’s talk <i className="fa-solid fa-arrow-right"></i></div>
                </div>
                <div className="form-right">
                    <form action="">
                        <input type="text" placeholder="Enter Your Name" />
                        <br />
                        <input type="email" placeholder="Your Email Address" />
                        <br />
                        <input type="text" placeholder="Describe Your Project" />
                        <a href="#"> Contact me<i className="fa-solid fa-arrow-right" style={{ color: "blue" }}></i></a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form;