import React from 'react'
import Header from './Header'

const AboutUs = () => {
  return (
    <>
        <Header />
        <div className="about-us-body">
            <div className="about-us-grid">
                <div className="left-grid">
                  <div className="left-grid-contents">
                    <div className="lexy-photo-info">
                      <div><img src="src\assets\lexyPhoto.png" alt="" id="lexyPhoto" /></div>
                      <span className="lexy-name">LexyTunes Productions</span><i class="fa-solid fa-circle-check fa-l" style={{color:"blue"}}></i>
                      <small>Studio</small>
                      <button id="followBtn">Follow</button>
                    </div>
                    <hr className="hr-about-us" />
                    <div className="tracks-soundkits">
                      <span className="tracks-no">100 Tracks</span>
                      <span className="soundkits-no">50 Sound Kits</span>
                    </div>
                    <hr className="hr-about-us" />
                    <div className="social-icons-container">
                      <small>All Social Platforms</small>
                      <br /><br />
                      <div className="social-icons-about-us">
                      <a href=""> <i class="fa-brands fa-facebook fa-l" style={{color:"#fff"}}></i> Facebbok</a>
                      <a href=""><i class="fa-brands fa-whatsapp fa-l" style={{color:"#fff"}}></i> Whatsapp</a>
                      <a href=""><i class="fa-brands fa-instagram fa-l" style={{color:"#fff"}}></i> Instagram</a>
                      <a href=""><i class="fa-brands fa-twitter fa-l" style={{color:""}}></i> Twitter</a>
                      <a href=""><i class="fa-brands fa-tiktok fa-l" style={{color:""}}></i> Tiktok</a>
                      <a href=""><i class="fa-brands fa-soundcloud fa-l" style={{color:"#fff"}}></i> SoundCloud</a>
                      <a href=""><i class="fa-brands fa-youtube fa-l" style={{color:""}}></i> Youtube</a>
                      <a href=""><i class="fa-brands fa-spotify fa-l" style={{color:""}}></i> Spotify</a>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="right-grid">
                  <div className="right-grid-content">
                    <h2 className="about-us-heading">About Us</h2>
                    <p className="about-us-text">
                    Grandeit – custodians of the New sound, we have immediately developed as the greatest new player in the generation and bespoke music organizations for TV, film, radio, amusements, on the web, and promoting markets.
                    The ‘Grandeit’ concepts is a gathering of music creators, and media experts who can control your music and sound needs from origination to consummation. Grandeit concepts is headed by super talented music producer    Adetona Alexander popularly known as Lexytunez.
                    We work with specialists to interpret and bring your sound vision to life.
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default AboutUs