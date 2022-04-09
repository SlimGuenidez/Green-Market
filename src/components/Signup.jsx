import React,{useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"


const Signup = ()=>{
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const post=()=>{
    axios.post('http://localhost:3000/api/user/signup',
    {username:username,password:password,email:email})
        .then(response=>{
          console.log(response.data)
          if (response.data=='yes'){
             navigate("/home")
          }
        })
        .catch((err)=>{console.log(err)
      })
  
        }
  
    return (
    <div  className="card" style={{textAlign: 'center', marginTop: '150px' }}>
      {console.log(username,password,email)}
        <input  type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email.." required/> <br /><br />

        <input  type="text" onChange={(event) => setName(event.target.value)} placeholder="Username.." required/>  <br /><br />
        
        <input  type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password.." required/> <br /><br />
        <button className="Login" onClick={post}>Register</button>
        <Link to="/"><button className="Login">Login</button></Link>


    </div>
)
}

export default Signup;