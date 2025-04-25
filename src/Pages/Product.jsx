import React, { useReducer } from 'react'

const Product = () => {
  const vivek =(state ,action)=>{
if(action.type=='inc'){
  return state+1
}
  }
  const initialState= 0
  const [state,dispatch] =useReducer(vivek,initialState)
  console.log(state);
  
  return (
    <div>
      {state}
      <button onClick={()=>dispatch({type:'inc'})}>increment</button>
    </div>
  )
}

export default Product
