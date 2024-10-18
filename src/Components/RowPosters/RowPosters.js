import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY } from '../../Constants/Constants'
import './RowPosters.css'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPosters(props) {
 const [poster,setPoster]=useState([])
 const [yturl,setyt]=useState('')

 const handleclose=()=>{
  setyt(false)
 }
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
        {yturl && <div><button onClick={handleclose} style={{position: 'absolute',
              marginLeft:'143vh',
              backgroundColor: '#D3D3D3',
              color: '#0A0A0A',
              marginTop:'15px',
              opacity:'0.5',
              border: 'none',
              padding: '8px 13px',
              cursor: 'pointer',
              fontSize: '16px',
              borderRadius: '50%' }}>x</button><Youtube yturl opts={opts} videoId={yturl.key} ></Youtube>  </div>}
      
    </div>
  ) 
}

export default RowPosters
