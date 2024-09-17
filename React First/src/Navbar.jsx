import "./style.css"
const Navbar=()=>{

    const navbar={
        display:"flex",
        justifyContent:"space-evenly",
        listStyleType:"none",
        backgroundColor:"#333",
        color:"#fff",
        padding:"10px",
        width:"100%",
        margin:"0px"
    }
    const liItemStyle={
      backgroundColor:"rgba(255, 255, 255, 0)",
      cursor:"pointer",
      fontSize:"20px",
    }
    return(
    <>
    <ul style={navbar}>
    <li style={liItemStyle}>Home</li>
    <li style={liItemStyle}>Services</li>
    <li style={liItemStyle}>Contact</li>
    <li style={liItemStyle}>About us</li>
    <li style={liItemStyle}>Logout</li>
   </ul>
   </>
    )
};

export default Navbar;