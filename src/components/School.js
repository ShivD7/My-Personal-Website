import React from 'react'
import './School.css'

function School({imageUrl, body}) {
  return (
    <div className='schoolflex'>
      <div className="m-2">
        <img src={imageUrl} className='w-45'/>
      </div>
        <p className='mt-3'>{body}</p>
    </div>
  )
}

export default School