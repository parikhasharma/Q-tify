import React, { useState } from 'react'
import './section.css'
import Card from '../Card'
import Carousel from '../Carousel'
function Section({title,data}) {
  const [isCollapsed,setIsCollapsed]=useState(false)
  return (
    <div className='section'>
      <div className='section-header'>
      <h1 className='title'>{title}</h1>
      <h1 className='section-toggle-btn' onClick={()=>{
        setIsCollapsed(!isCollapsed)
      }}>{isCollapsed?'Show All' :'Collapse'}</h1>
      </div>
       {isCollapsed?<Carousel data={data}/>: <div className='card-container'>
            {
            data.map((cardData)=> <Card key={cardData.id} imgSrc={cardData.image} followersCount={cardData.follows} label={cardData.title}/>
            )}
        </div>}
    </div>
  )
}

export default Section