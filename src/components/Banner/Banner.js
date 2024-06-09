import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../axios'
import { API_KEY,imageUrl} from '../constants/constants'
import { useState } from 'react'
function Banner() {
  const [movie,setMovie] =useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[7])
    })
  },[])
  return (
    <div  
    style ={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='Banner'>
        <div className='content'> 
          <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_button'>
                <button className='button'>play</button>
                <button className='button'>My list </button>
            </div>
            <div className='description'>{movie ? movie.overview:""}</div>
            <div className='content-Right'>
            <div className='banner_button'>
                <button className='button'>login</button>
                <button className='button'>signup</button>
            </div>  

            </div>
           
        </div>
       <div className="fade_bottom"></div>
    </div>
  )
  }

export default Banner
