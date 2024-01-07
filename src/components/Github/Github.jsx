import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Github() {
    const {name} = useParams()
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch(`https://api.github.com/users/${name}`)
         .then(res => res.json())
         .then(data => setData(data))
     }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" width={300}
       />
       <Link
       to="/github">
        <button className='flex bg-gray-800 text-white py-2 px-6 rounded-lg text-lg my-1'>
            Back
        </button>
       </Link>
    </div>

  )
}

export default Github
