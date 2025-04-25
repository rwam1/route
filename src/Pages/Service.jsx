import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Service = () => {
    const { state}=useLocation()

    
  return (
    <div>
      {/* {state} */}
 
      <Link to={'/service/add'}>Add</Link>
      <br />
      <Link to={'/service/edit'}>Edit</Link>
      <Outlet/>
    </div>
  )
}

export default Service
