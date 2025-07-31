import React from 'react'
import Footer from './Footer'

const ServicesMobile = () => {
  return (
    <>

        <div className='services-container-mobile'>
            <h2 className="h2-services-mobile">Services</h2>
            <div className="beats-instrumental-container-mobile">
                <h3>Beats making/Instrumentals</h3>
                <p>Beat making/Instrumentals: We provide ready-made and custom instrumentals to meet diverse creative/consumption needs.</p>
                
            </div>
            <div className="song-writing-container-mobile">
                <h3>Song Writing</h3>
                <p>Songwriting: We write songs in all genres.</p>
            </div>
            <div className="consultations-container-mobile">
                <h3>Consultations</h3>
                <p>Consultations: We have experts on ground ready to listen and provide answers.</p>
            </div>
            <div className="mixing-mastering-container-mobile">
                <h3>Mixing & Mastering Container</h3>
                <p>We offer professional mixing and mastering services that gets your sound to an industry standard level.</p>
            </div>
            <div className="sound-packs-container-mobile">
                <h3>Sound Packs</h3>
                <p>The everyday sounds/samples being used by the Grandeit team are available for your use.</p>
            </div>
            <div className="digital-marketing-promotion-container-mobile">
                <h3>Digital Marketing & Promotions</h3>
                <p>A good product deserves to be consumed, so is a good song. We are here to help you find a strategy that works for you.</p>
            </div>
            <button id="servicesContactMobileBtn">Know More!</button>
            
            <Footer />
                
        </div>
        
    </>
    
  )
}

export default ServicesMobile