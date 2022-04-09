import axios from 'axios';
import React,{useState} from 'react';
import { Link } from "react-router-dom";
// import  { Redirect } from 'react-router-dom'


const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] =useState("");
//  const post=()=>{
//    axios.post('http://localhost:3000/api/user/login',{username:username,password:password})
//    .then(response=>{if(response.data=='yes'){
//      return <Redirect to="/home"/>
//    }})

//  }
  return ( 
      <div id="login" style={{textAlign: 'center', marginTop: '300px' }}> {console.log(username,password)}
          <input className="Input" type="text" onChange={(event) => setName(event.target.value)} placeholder="Email or username.."/> <br/><br />
          
          <input className="Input" type="password"  onChange={(event) => setPassword(event.target.value)} placeholder="Password.."/> <br/><br />

          <Link to="/home">
            <button className="Login"  > Login </button>
             </Link> 
             <br/><br/>
          <Link to="/signup">Create new account</Link>

      </div>
   );
}

export default Login;