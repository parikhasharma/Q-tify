import React from 'react'
import './card.css'
function Card() {
  return (
    <div className='card-wrapper'>
        <div className='card'>
            <div className='card-img-frame'>
                <img className='card-img' src='Rectangle 2138.png'/>
            </div>
            <div className='card-content'>
                <div className='card-content-pill'>
                    <p>100 Follows</p>
                </div>
            </div>
        </div>
        <p className='card-label'>New English Songs</p>
    </div>
  )
}

export default Card