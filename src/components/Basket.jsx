import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Basket = (props) => {
    const [list,setList]=useState([])
    const [index,setIndex]=useState(null)
 console.log(props.state);
   return (     
     <div className="card">
        <img src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=" width='500px' height='500px' alt="" />
        <p>potato 1000</p><br /><br />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" width='500px' height='500px' alt="" />
        <p>tomato 2000</p>
       {props.state.map((elem,i)=>{
           return (
               <ul>
                   <li>{i}</li>
                   <li>{elem}</li>
                   
               </ul>
           )
       })}

        </div>
     );
}
 
export default Basket;