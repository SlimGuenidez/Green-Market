import React,{useState} from 'react';
import { Link } from "react-router-dom";


const Signup = ()=>{
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
    return (
    <div className="Box" >
      {console.log(username,password,email)}
        <input  type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email.."/> <br /><br />

        <input  type="text" onChange={(event) => setName(event.target.value)} placeholder="Username.."  /> <br /><br />
        
        <input  type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password.."/> <br /><br />

        <Link to="/home"><button className="Login">Register</button></Link>


    </div>
)
}

export default Signup;