import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {id} = useParams()
  return (
    <div>
      <h1 className='bg-orange-600 py-5 text-white'>User ID is : {id}</h1>
    </div>
  )
}



export default User
