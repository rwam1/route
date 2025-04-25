import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
 const navigate = useNavigate()

 const obj ={name: 'nikhil', city:'nagpur'}
 const handleNavigate=()=>{
 navigate('/service',{state:obj})
 }
  return (
    <div>
      About here

      <button onClick={handleNavigate}>send data</button>
    </div>
  )
}

export default About
