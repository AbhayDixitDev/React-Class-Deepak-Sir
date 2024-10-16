import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';


const SendData = () => {
    const [jsonData, setJsonData] = useState([])
    const [show, setShow] = useState(false)
    const [updateid, setUpdateid] = useState(null)
    const [updform, setUpdform] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:4000/info').then((items)=>setJsonData(items.data));
    }, [])   

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
    const updatevalue = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUserdata({ 
            ...userdata, 
            ...{ [key]: value } 
        });
        updateform()
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
    const deleteuser = (id) => {
        axios.delete(`http://localhost:4000/info/${id}`).then(()=>{window.alert("Data deleted successfully")})
    }
    const updateform = (arg) => {
        alert(arg)
        setUpdateid(arg)
        setUpdform(!updform)
        setUserdata({
            name: arg.name,
            image: arg.image,
            age: arg.age,
            city: arg.city,
            email: arg.email
        })
        alert(JSON.stringify(userdata))
    }
    const updateuser = () => {
        axios.put(`http://localhost:4000/info/${updateid}`, JSON.stringify(userdata)).then(()=>{window.alert("Data updated successfully")})
    }
    return (
        <>
        <Button variant="primary" style={{margin:"2rem auto",display:"block"}} onClick={()=>setShow(!show)}>Add User</Button>
       <form style={{display:show?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"2rem auto",border:"1px solid black",padding:"1rem",width:"20rem"}}>
       <input type="text" name="name" placeholder="Enter your name" value={userdata.name} onChange={handleinput} /> <br />
        <input type="text" name="image" placeholder="Enter your image url" value={userdata.image} onChange={handleinput} /> <br />
        <input type="text" name="age" placeholder="Enter your age" value={userdata.age} onChange={handleinput} /> <br />
        <input type="text" name="city" placeholder="Enter your city" value={userdata.city} onChange={handleinput} /> <br />
        <input type="text" name="email" placeholder="Enter your email" value={userdata.email} onChange={handleinput} /> <br />
        <button onClick={submitdata}>Submit</button>
       </form>
       <form style={{display:updform?"flex":"none",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"2rem auto",border:"1px solid black",padding:"1rem",width:"20rem"}}>
       <input type="text" name="name" placeholder="Enter your name" value={userdata.name} onChange={updatevalue} /> <br />
        <input type="text" name="image" placeholder="Enter your image url" value={userdata.image} onChange={updatevalue} /> <br />
        <input type="text" name="age" placeholder="Enter your age" value={userdata.age} onChange={updatevalue} /> <br />
        <input type="text" name="city" placeholder="Enter your city" value={userdata.city} onChange={updatevalue} /> <br />
        <input type="text" name="email" placeholder="Enter your email" value={userdata.email} onChange={updatevalue} /> <br />
        <button onClick={updateuser}>Update</button>
       </form>

        <table style={{margin:"2rem auto",border:"1px solid black",padding:"1rem",width:"40rem"}}>
            <tr style={{border:"1px solid black"}}>
                <th style={{border:"1px solid black"}}>Name</th>
                <th style={{border:"1px solid black"}}>Image</th>
                <th style={{border:"1px solid black"}}>Age</th>
                <th style={{border:"1px solid black"}}>City</th>
                <th style={{border:"1px solid black"}}>Email</th>
                <th style={{border:"1px solid black"}}>Action</th>
            </tr>
       {
        jsonData.map((item)=>(
            <tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}>{item.name}</td>
                <td style={{border:"1px solid black",backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center",width:"100px",height:"100px"}}></td>
                <td style={{border:"1px solid black"}}>{item.age}</td>
                <td style={{border:"1px solid black"}}>{item.city}</td>
                <td style={{border:"1px solid black"}}>{item.email}</td>
                <td style={{border:"1px solid black"}}><Button variant="danger" onClick={()=>deleteuser(item.id)}>Delete</Button></td>
                <td style={{border:"1px solid black"}}><Button variant="warning" onClick={()=>updateform(item)}>Update</Button></td>
                
            </tr>
          )
        )
        
      }
      </table>
        </>
    )
}

export default SendData;