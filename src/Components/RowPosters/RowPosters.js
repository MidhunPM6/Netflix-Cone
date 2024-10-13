import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY } from '../../Constants/Constants'
import './RowPosters.css'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPosters(props) {
 const [poster,setPoster]=useState([])
 const [yturl,setyt]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
       setPoster(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  function youtubemovie(id){
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results!==0){
      setyt(response.data.results[0])
      console.log(id)
      }else{
        console.log('No File Found')
      }
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='row_posters'>
          {
            poster.map((obj)=>
              <img  onClick={()=>youtubemovie(obj.id)}className="poster"src={`${imageUrl+obj.poster_path}`}alt="" />
               
          )    
          }
        </div>
        {yturl && <Youtube yturl opts={opts} videoId={yturl.key} ></Youtube>}
      
    </div>
  ) 
}

export default RowPosters
