import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
const User = () => {

const {abc} =useParams()
  return (
    <div>
      User {abc}
    </div>
  )
}

export default User
