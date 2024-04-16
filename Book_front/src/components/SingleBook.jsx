import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, Title, imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg: px-24'>
            <img src={imageURL} alt="" className='h-72' />
            <h2 className='font-bold'>{Title}</h2>
    </div>
  )
}

export default SingleBook