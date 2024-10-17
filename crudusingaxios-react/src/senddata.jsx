import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import './senddata.css'; // Import the external CSS file

const SendData = () => {
    const [jsonData, setJsonData] = useState([]);
    const [show, setShow] = useState(false);
    const [updateid, setUpdateid] = useState(null);
    const [updform, setUpdform] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('https://crud-data-for-react.vercel.app/info').then((items) => setJsonData(items.data));
    }, []);

    const [userdata, setUserdata] = useState({
        name: "",
        image: "",
        age: "",
        city: "",
        email: ""
    });

    let filteredData1 = jsonData;
    let showdata = search === "" ? filteredData1 : filteredData1.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

    const handleinput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUserdata({ ...userdata, [key]: value });
    }

    const updatevalue = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUserdata({ ...userdata, [key]: value });
        updateform();
    }

    const submitdata = () => {
        axios.post("https://crud-data-for-react.vercel.app/info", JSON.stringify(userdata))
            .then(() => { window.alert("Data sent successfully") })
            .then(() => {
                setUserdata({
                    name: "",
                    image: "",
                    age: "",
                    city: "",
                    email: ""
                });
            });
    }

    const deleteuser = (id) => {
        axios.delete(`https://crud-data-for-react.vercel.app/info/${id}`).then(() => { window.alert("Data deleted successfully") });
    }

    const updateform = (arg) => {
        setUpdateid(arg.id);
        setUpdform(!updform);
        setUserdata({
            name: arg.name,
            image: arg.image,
            age: arg.age,
            city: arg.city,
            email: arg.email
        });
    }

    const updateuser = () => {
        axios.put(`https://crud-data-for-react.vercel.app/info/${updateid}`, JSON.stringify(userdata)).then(() => { window.alert("Data updated successfully") });
    }

    return (
        <>
            <input type="text" placeholder="Search by name" onChange={(e) => setSearch(e.target.value)} id="search"  />
            <Button variant="primary" className="button" onClick={() => setShow(!show)}>Add User</Button>
            
            <form className={`form ${show ? '' : 'hidden'}`}>
                <input type="text" name="name" placeholder="Enter your name" value={userdata.name} onChange={handleinput} /><br />
                <input type="text" name="image" placeholder="Enter your image url" value={userdata.image} onChange={handleinput} /><br />
                <input type="text" name="age" placeholder="Enter your age" value={userdata.age} onChange={handleinput} /><br />
                <input type="text" name="city" placeholder="Enter your city" value={userdata.city} onChange={handleinput} /><br />
                <input type="text" name="email" placeholder="Enter your email" value={userdata.email} onChange={handleinput} /><br />
                <button onClick={submitdata}>Submit</button>
            </form>

            <form className={`form ${updform ? '' : 'hidden'}`}>
                <input type="text" name="name" placeholder="Enter your name" value={userdata.name} onChange={updatevalue} /><br />
                <input type="text" name="image" placeholder="Enter your image url" value={userdata.image} onChange={updatevalue} /><br />
                <input type="text" name="age" placeholder="Enter your age" value={userdata.age} onChange={updatevalue} /><br />
                <input type="text" name="city" placeholder="Enter your city" value={userdata.city} onChange={updatevalue} /><br />
                <input type="text" name="email" placeholder="Enter your email" value={userdata.email} onChange={updatevalue} /><br />
                <button onClick={updateuser}>Update</button>
            </form>

            <table className="table">
                <tr key="header">
                    <th>Name</th>
                    <th>Image</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {
                    showdata.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td style={{backgroundImage:`url(${item.image})`,backgroundSize:"cover",backgroundPosition:"center",height:"200px"}}></td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <td>{item.email}</td>
                            <td><Button variant="danger" style={{backgroundColor:"red"}} onClick={() => deleteuser(item.id)}>Delete</Button>
                            <Button variant="warning" style={{backgroundColor:"yellow"}} onClick={() => updateform(item)}>Update</Button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </>
    );
};

export default SendData;