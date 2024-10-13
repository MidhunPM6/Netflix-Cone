import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPosters from './Components/RowPosters/RowPosters';
import { action, horror_movies, top_Searched } from './urls';



function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPosters   url={top_Searched}  title='Top Searched'   />
    <RowPosters  url={action}  title="Action" />
    <RowPosters  url={horror_movies}  title="Horror Movies" />
    
    </div>
    )
  }
  
    



export default App;
