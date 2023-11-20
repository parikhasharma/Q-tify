import React from 'react'
import SearchBox from '../SearchBox'
import Button from '../Button'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src='logo.png' width={67} height={34} alt='Nothing found'></img>
        <SearchBox/>
        <Button>Give Feedback</Button>
    </div>
  
  )
}

export default Navbar