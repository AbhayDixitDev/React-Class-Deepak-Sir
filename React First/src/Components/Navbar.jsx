import "../assets/style.css";

const Navbar=()=>{

    return(
    <>
    <div className="navbar">
            <div className="navbar-left">
                <a href="#"><img
                        src="https://assets-global.website-files.com/622fbc5a718ac3417fcd3d75/6230b271b897e76d2705ed6e_logo-developer-webflow-ecommerce-template.svg"
                        alt=""/></a>

            </div>
            <div className="navbar-right">
                <ul className="list">
                    <li className="listitems"><a href="#hero">Home</a></li>
                    <li className="listitems"><a href="#about">About</a></li>
                    <li className="listitems"><a href="#skills">Skills</a></li>
                    <li className="listitems"><a href="#portfolio">Portfolio</a></li>
                    <li className="listitems"><a href="#form">Pages</a></li>
                </ul>
                <div className="cartbtn">
                    <a href="#">Cart</a>
                </div>
            </div>
        </div>
   </>
    )
};

export default Navbar;