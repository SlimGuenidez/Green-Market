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
      <div>
              <img width='200px' height='200px' src="https://images-platform.99static.com/PFO3fTK_2UgWPXb1Ne_dNExJRBw=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/85/85932/attachment_85932627" alt="" />
    <div  className="card" style={{textAlign: 'center', marginTop: '50px' }}>
      {console.log(username,password,email)}

        <input  type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email.." required/> <br /><br />

        <input  type="text" onChange={(event) => setName(event.target.value)} placeholder="Username.." required/>  <br /><br />
        
        <input  type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password.." required/> <br /><br />
        <button className="Login" onClick={post}>Register</button>
        <Link to="/"><button className="Login">Login</button></Link>

</div>
    </div>
)
}

export default Signup;