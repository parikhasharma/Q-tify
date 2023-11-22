import { useEffect, useState } from 'react';
import './App.css';
import Hero from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import axios from 'axios';

const ENDPOINT='https://qtify-backend-labs.crio.do/'
function App() {
  const [topAlbums,setTopAlbums]=useState([])
  const [newAlbums,setNewAlbums]=useState([])
  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`).then(({data})=>setTopAlbums(data))
    axios.get(`${ENDPOINT}albums/new`).then(({data})=>setNewAlbums(data))

  },[])
  return (
    <div>
      <Navbar/>    
      <Hero/> 
      <Section title='Top Albums' data={topAlbums}/>
      <Section title='New Albums' data={newAlbums}/>
    </div>
  );
}

export default App;
