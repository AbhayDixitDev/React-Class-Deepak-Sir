import { useState } from "react";
import { Container } from "react-bootstrap";

const App = () => {

  // let [name, setName] = useState("");
  // let [email, setEmail] = useState("");
  // let [password, setPassword] = useState("");
  // let [gender, setGender] = useState("");
  // let [age, setAge] = useState("");
  // let obj = {
  //   "name": name,
  //   "email": email,
  //   "password": password,
  //   "gender": gender,
  //   "age": age
  // }
  
  // const submit = () => {
  //   console.log(obj);
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  //   setGender("");
  //   setAge("");
  // }
  let [count, setCount] = useState(0);
  const counterPlus = () => {
    setCount(count + 1);
  }
  const counterMinus = () => {
    setCount(count - 1);
  }
  return (
    <>
       {/* <Container width="50%">
       <input type="text" style={{width: "50%",marginLeft: "20px"}} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/> <br />
       <input type="email" style={{width: "50%",marginLeft: "20px"}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/> <br />
       <input type="password" style={{width: "50%",marginLeft: "20px"}} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/> <br />
       <input type="text" style={{width: "50%",marginLeft: "20px"}} value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter your gender M for male and F for female" /> <br />
       <input type="text" style={{width: "50%",marginLeft: "20px"}} value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" /> <br />
       <button onClick={submit}>Submit</button>
       </Container> */}

       {count}
       <br />
       <button onClick={counterPlus}>Add</button>
       <button onClick={counterMinus}>Subtract</button>

    </>
  )
}

export default App
