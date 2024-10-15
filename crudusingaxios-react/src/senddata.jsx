import { useState, useEffect } from "react";
import axios from "axios";

const SendData = () => {
    const [userdata, setUserdata] = useState({
        name: "",
        image: "",
        age: "",
        city: "",
        email: ""
    });
    const handleinput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUserdata({ 
            ...userdata, 
            ...{ [key]: value } 
        });
        console.log(userdata);
    }
    const submitdata = () => {
        axios.post("http://localhost:4000/info", JSON.stringify(userdata))
        .then(()=>{window.alert("Data sent successfully")})
        .then(()=>{setUserdata({
            name: "",
            image: "",
            age: "",
            city: "",
            email: ""
        })})
    }
    return (
        <>
       <form >
       <input type="text" name="name" placeholder="Enter your name" value={userdata.name} onChange={handleinput} /> <br />
        <input type="text" name="image" placeholder="Enter your image url" value={userdata.image} onChange={handleinput} /> <br />
        <input type="text" name="age" placeholder="Enter your age" value={userdata.age} onChange={handleinput} /> <br />
        <input type="text" name="city" placeholder="Enter your city" value={userdata.city} onChange={handleinput} /> <br />
        <input type="text" name="email" placeholder="Enter your email" value={userdata.email} onChange={handleinput} /> <br />
        <button onClick={submitdata}>Submit</button>
       </form>
        </>
    )
}

export default SendData;