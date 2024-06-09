import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner/Banner";
import {orginals,action,horror,romance} from './components/constants/url'
import './App.css'
import RowPost from "./components/RowPost/RowPost";

function App() {  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url = {orginals} title='Netflix originals'/>
      <RowPost  url ={action} title='Action' isSmall />
      <RowPost url ={horror} title='Horror' isSmall/>
      <RowPost url ={romance} title= 'Romance' isSmall/>

      
    </div>
  );
}

export default App;
