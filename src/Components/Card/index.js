import React from 'react'
import './card.css'
function Card({imgSrc,followersCount,label}) {
  return (
    <div className='card-wrapper'>
        <div className='card'>
            <div className='card-img-frame'>
                <img className='card-img' src={imgSrc} alt='no content available'/>
            </div>
            <div className='card-content'>
                <div className='card-content-pill'>
                    <p>{followersCount}</p>
                </div>
            </div>
        </div>
        <p className='card-label'>{label}</p>
    </div>
  )
}

export default Card