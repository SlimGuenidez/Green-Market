import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import Card from './Card.jsx'


import Layout from "./Layout.jsx"



function Home() {
const [list,setList]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/item/selectItems')
    .then(response=>setList(response.data))
    .catch(err=>console.log(err))
  },[])

  
  return (
  
  <div>
    <Layout/>
    {list.map((elem,index)=>{
      return <Card elem={elem} key={index}/>
    })}
    </div>
  
  );
}

export default Home;