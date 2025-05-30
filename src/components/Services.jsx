import React from 'react'
import Header from './Header'

const Services = () => {
  return (
    <>
    <Header />
    <div className="services-container">
        <div className="services-contents">
            <div className="services-left-grid">
                <div className="services-fixed">
                <h2>Services</h2>
                <div className="services-links">
                    <hr /><a href="">Beats making/Instrumentals</a><hr />
                    <a href="">Song Writing</a><hr />
                    <a href="">Consultations</a><hr />
                    <a href="">Mixing & Mastering</a><hr />
                    <a href="">Film Scoring</a><hr />
                    <a href="">Digital Marketing and Promotions</a><hr />
                </div>
                </div>
            </div>
            <div className="services-right-grid">
                <div className="services-right-grid-content">
                    <div className="beats-instrumental-container">
                        <h3>Beats making/Instrumentals</h3>
                        <p>Beat making/Instrumentals: We provide ready-made and custom instrumentals to meet diverse creative/consumption needs.
                        </p>
                    </div>
                    <div className="song-writing-container">
                        <h3>Song Writing</h3>
                        <p>Songwriting: We write songs in all genres.</p>
                    </div>
                    <div className="consultations-container">
                        <h3>Consultations</h3>
                        <p>Consultations: We have experts on ground ready to listen and provide answers.</p>
                    </div>
                    <div className="mixing-mastering-container">
                        <h3>Mixing & Mastering Container</h3>
                        <p>We offer professional mixing and mastering services that gets your sound to an industry standard level.</p>
                    </div>
                    <div className="sound-packs-container">
                        <h3>Sound Packs</h3>
                        <p>The everyday sounds/samples being used by the Grandeit team are available for your use.</p>
                    </div>
                    <div className="digital-marketing-promotion-container">
                        <h3>Digital Marketing & Promotions</h3>
                        <p>A good product deserves to be consumed, so is a good song. We are here to help you find a strategy that works for you.</p>
                    </div>
                    <button id="servicesContactBtn">Click Here</button>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Services