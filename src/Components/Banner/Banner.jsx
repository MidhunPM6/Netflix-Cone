import React, { useEffect,useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../Constants/Constants'

function Banner() {
  const[banner,setBanner]=useState([])

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

          setBanner(response.data.results[6])
    })
  },[])
  return (
    <div className='banner' 
    style={{backgroundImage:`url(${banner ? imageUrl+banner.backdrop_path : ""})`}}>
        <div className="content">
            <h1 className='title'>{banner ? banner.title :""}</h1>
            <div className="banner_buttons">
                <button className='btns'>Play</button>
                <button className='btns'>My List</button>
            </div>
            <h1 className='description'>{banner ? banner.overview : ""}</h1>
        </div>
        <div className='fade_bottom'></div>
        
    </div>
  )
}

export default Banner
