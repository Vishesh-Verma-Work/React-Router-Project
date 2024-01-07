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
      <h2>Github Followers : {data.followers}</h2>
      <img src={data.avatar_url} alt="" width={300}
       />
       <h3 className='text-lg my-4 py-3 bg-gray-800'>{data.bio}</h3>
       
       <h1 className='text-md my-3'>Github Repo : {data.public_repos}</h1>

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
