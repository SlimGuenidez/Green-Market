import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
// import Card from './Card.jsx'
import Basket from './Basket.jsx'


import Layout from "./Layout.jsx"



function Home() {
const [list,setList]=useState([])
const [index,setIndex]=useState(0)
const [state,setState]=useState([])
const [quantity,setQuantity]=useState(null)
  useEffect(()=>{
    axios.get('http://localhost:3000/api/item/selectItems')
    .then(response=>setList(response.data))
    .catch(err=>console.log(err))
  },[])

const changeQuantity=(event,elem)=>{
  console.log(event.target.value)
  
  var obj=state
  obj[event.target.id]=event.target.value

  setState(obj)
  
}
  const addToBasket=()=>{
    console.log(state)
  }
  return (
  
  <div>
    <Layout/>
    {index==1 &&  <div> 
      <button onClick={()=>setIndex(0)}>back</button>
      <Basket state={state}/> 
      </div> }
    {index==0 && <div>
      <button onClick={()=>setIndex(1)}>Basket</button>
      {list.map((elem,index)=>{
          return (<div key={index}> 
           <img src={elem.image}/>
           <p>{elem.description} {elem.price}</p>
      
           <input type="number"  onChange={changeQuantity} id={elem.description} />
            <button type="button" onClick={addToBasket} >add to basket</button>
                   </div>
                    )}
       )}
       </div>
    
}
</div>)}

export default Home;