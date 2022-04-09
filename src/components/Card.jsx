import React,{useState} from 'react';
const Card = (props) => {
    const [quantity,setQuantity]=useState(null)
    return (
         <div>
        <p>{props.elem.description}</p>
        <img src={props.elem.image}/>
        <input type="number"  onChange={(event)=>setQuantity(event.target.value)} />
        <button type="button" >add to basket</button>
    </div>
     );
}
 
export default Card;