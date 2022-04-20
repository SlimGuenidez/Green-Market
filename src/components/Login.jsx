import axios from 'axios';
import React,{useState} from 'react';
import { Link,useNavigate } from "react-router-dom";



const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] =useState("");
  let navigate = useNavigate();
 const post=()=>{
  axios.post('http://localhost:3000/api/user/login',
  {username:username,password:password})
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
      <div className='card' id="login" style={{textAlign: 'center', marginTop: '50px' }}> {console.log(username,password)}
          <input className="Input" type="text" onChange={(event) => setName(event.target.value)} placeholder="Email.." required/> <br/><br />
          
          <input className="Input" type="password"  onChange={(event) => setPassword(event.target.value)} placeholder="Password.." required/> <br/><br />

          {/* <Link to="/home"> */}
            <button className="Login"  onClick={post}> Login </button>
             {/* </Link>  */}
             <br/><br/>
          <Link to="/signup">Create new account</Link>

      </div>
      </div>
   );
}

export default Login;