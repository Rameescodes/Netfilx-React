import React,{useEffect, useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import axios from '../axios'
import {imageUrl,API_KEY } from '../constants/constants'
function RowPost(props) {
  const  [movies,setMovies] = useState([])
  const [urlId,seturlId] = useState('')
    useEffect(()=>{
    axios.get(props.url).then(( response)=>{
      console.log(response.data)
      setMovies(response.data.results )
    }).catch(err=>{
      alert('Network Error')
    })

  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
const handleMovie = (id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response=>{
if(response.data.results.length!==0) {
  seturlId(response.data.results[0])
}else{
  console.log('array empty')
}


  }))
  console.log(id)

}

  return (
    <div className='row'>   
       <h2>{props.title}</h2>
       <div className='posters'>
        {movies.map((obj)=>
           <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?  'smallposter' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
        )}
       </div>
    { urlId &&  <YouTube opts={opts} videoId={urlId.key} />   }

    </div>  
  )
}

export default RowPost
