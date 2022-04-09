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
      <h1 className="Title">Green Market</h1>
      <div className='card' id="login" style={{textAlign: 'center', marginTop: '150px' }}> {console.log(username,password)}
          <input className="Input" type="text" onChange={(event) => setName(event.target.value)} placeholder="Email or username.." required/> <br/><br />
          
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