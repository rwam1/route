import React, { useEffect, useReducer, useState } from 'react'

const Product = () => {
const [name ,setName]=useState("")
  
  useEffect(()=>{
    let result =localStorage.getItem('name')
    setName(result);
    
  },[])
  const handleLocal =()=>{
    localStorage.clear()

  }
  return (
    <div>
     {name}
     <button onClick={()=>handleLocal()}>remove item</button>
    </div>
  )
}

export default Product
