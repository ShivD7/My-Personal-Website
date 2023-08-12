import React from 'react';
import './Card.css';


function Card({title, imageUrl, body, givenUrl}) {
  return (
    <div className='card-container'>
        <div className="image-container">
            <img src={imageUrl} width = '200px'/>
        </div>
        <div className='card-content'>
            <div className="card-title">
                <h3><strong>{title}</strong></h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>

        <div className="btn">
            <a href={givenUrl}>
                <button className='text-info'>
                    <a>
                        View more
                    </a>
                </button>
            </a>

        </div>
        
    </div>
  )
}

export default Card