import React from 'react'
import grandeitVideo from '../assets/grandeitVideo.mp4'

const Content = () => {
  return (
    <>

        <div className='video-background'>
            
              <video src={grandeitVideo} autoPlay loop muted />
            
        </div>
        <div className="background-overlay">
          <div className='grandeit-text'>
            <h1>CUSTODIANS OF THE</h1>
            <h1 id='textColor'>NEW SOUND</h1>
            <div className='search'>
              <input type="text" id='search' placeholder='What are you looking for?' />{/* <i class="fa-solid fa-search" style={{color:"#000"}}></i> */}<button id='searchBtn'>Search</button>
            </div>
          </div>
          
        </div>
        
    </>
  )
}

export default Content