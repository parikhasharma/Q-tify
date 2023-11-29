import React, { useState } from 'react'
import Carousel from '../Carousel'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './fsection.css'

function Filter({title,data,filter,executeFilter}) {
  const [selectedTab,setSelectedTab]=useState(0)
  return (
    <div className='section'>
        <div>
            <h1 className='title'>{title}</h1>
        </div>
        <Tabs value={selectedTab} onChange={(e,value)=>{
          executeFilter(filter[value].key)
          setSelectedTab(value) }}
           TabIndicatorProps={{style:{backgroundColor:'var(--css-primary)'}}}>
            {filter?.map((f)=>{
             return(
              <Tab className="tab" key={f.key} label={f.label}/>
             )
            })}          
        </Tabs>
        <Carousel data={data}/>
    </div>
  )
}

export default Filter