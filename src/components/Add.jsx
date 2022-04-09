import axios from 'axios';

import React,{useState,useEffect} from 'react';
import Layout from "./Layout.jsx"
const Add = () => {
    const [quantity,setQuantity] = useState(null)
    const [description,setDescription] = useState(null)
    const [price,setPrice] = useState(null)
    const [image,setImage] = useState(null)
    const [list,setList]=useState([])
    const [updateQuant,setUpdateQuant]= useState(null)
    const [updateDescr,setUpdateDescr]= useState(null)
    const [updatePrice,setUpdatePrice]= useState(null)
    const [index,setIndex]=useState(null)

  useEffect(()=>{
    axios.get('http://localhost:3000/api/item/selectItems')
    .then(response=>setList(response.data))
    .catch(err=>console.log(err))
  },[list])
    const post=()=>{
        console.log(quantity,description,image,price);
        if(quantity&&description&&image&&price){
            axios.post('http://localhost:3000/api/item/insertItem',
            {description:description, quantity:quantity, image:image, price:price})
            .then(response=>{
                var array=list
                array.push ({description:description,quantity:quantity,image:image, price:price})
                setList(array)
            })
            .catch(err=>console.log(err))
        }
    }
    const dlt=(id)=>{
        axios.delete(`http://localhost:3000/api/item/d/${id}`)
        .then(response=>{
            var array=list
            array.splice(id-1,1)
            setList(array)
        })
    }
    const update=(id)=>{

        if(updateDescr&&updateQuant&&updatePrice){
            console.log(updatePrice)
            axios.put(`http://localhost:3000/api/item/u/${id}`,{quantity:updateQuant,description:updateDescr,price:updatePrice})
            .then(response=>{
                if(response.data==='yes'){
                    var array=list
                    array[id-1]={quantity:updateQuant,description:updateDescr,price:updatePrice}
                    setList(array)
                    setIndex(null)
                }
            })
        }
    }
    const changeView=(elem)=>{
        setIndex(elem.id)
    }
    const cancel=()=>{
        setIndex(null)
    }
    return (
        <div>
            
            <Layout/>
            <input type="text" placeholder="description" onChange={(e)=>setDescription(e.target.value)}></input>
            <input type="number" placeholder="quantity" onChange={(e)=>setQuantity(e.target.value)}></input>
            <input type="text" placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
            <input type="text" placeholder="image" onChange={(e)=>setImage(e.target.value)}></input>

            <button onClick={post}>add</button>
            {list.map((elem,i)=>{
                if(elem.id===index){
                    return( 
                        <div className="card"key={i}>
                            
                            <input type="text" placeholder="description" onChange={(e)=>setUpdateDescr(e.target.value)}/>
                            <input type="text" placeholder="quantity" onChange={(e)=>setUpdateQuant(e.target.value)}/>
                            <input type="text" placeholder="price" onChange={(e)=>setUpdatePrice(e.target.value)}/>
                            <button onClick={()=>update(elem.id)}>confirm</button>
                            <button onClick={cancel}>Cancel</button>
                        </div>
                        )
                    }
                else{
                    return(
                        <div className="card"key={i}>
                        <p>element :{elem.description} quantity: {elem.quantity} price: {elem.price}</p>
                        <img src={elem.image}/>
                        <button onClick={()=>changeView(elem)}>update</button>
                        <button onClick={()=>dlt(elem.id)}>delete</button>
                        </div>
                        ) 
                    }
                    
                }
                    
                
            )}
        </div>
      );
}
 
export default Add;