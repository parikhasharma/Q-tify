import { useEffect, useState } from 'react';
import './App.css';
import Hero from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Filter from './Components/FilterSection';
import axios from 'axios';

const ENDPOINT='https://qtify-backend-labs.crio.do/'
function App() {
  const [topAlbums,setTopAlbums]=useState([])
  const [newAlbums,setNewAlbums]=useState([])
  const [songs,setSongs]=useState([])
  const [filteredSongs,setFilteredSongs]=useState([])
  const [genres,setGenres]=useState([])
  useEffect(()=>{
    axios.get(`${ENDPOINT}albums/top`).then(({data})=>setTopAlbums(data))
    axios.get(`${ENDPOINT}albums/new`).then(({data})=>setNewAlbums(data))
    axios.get(`${ENDPOINT}songs`).then(({data})=>
    {setSongs(data)
    setFilteredSongs(data)})
    axios.get(`${ENDPOINT}genres`).then(({data})=>setGenres([{"key":"all","label":"All"},...data.data]))

  },[])
  return (
    <div>
      <Navbar/>    
      <Hero/> 
      <Section title='Top Albums' data={topAlbums} navId='ta'/>
      <Section title='New Albums' data={newAlbums} navId='na'/>
      <Filter title='Songs' data={filteredSongs} filter={genres}
      executeFilter={(genre)=>{
        if(genre==="all"){
          setFilteredSongs(songs)
        }else{
          setFilteredSongs(songs.filter(song=>song.genre.key===genre))
        }
      }}
      />
    </div>
  );
}

export default App;
