import React from "react";
import equalizerImg from '../assets/equalizer-g162ea42f1_1280.png';
import musicImg from '../assets/music-gd92fb23ca_1920.jpg';
import downloadImg from '../assets/download-g19d3a9f43_1280.png';

const GrandeitStore = () => {
  return (
    <>
      <div className="grandeit-store">
        <div className="grandeit-store-overlay">
          <div className="grandeit-store-header">
            <h2>Grandeit Store</h2>
          </div>
          <div className="songs-soundpacks-freedownloads">
            <a href="#"><div>
              <img
                src={equalizerImg}
                alt=""
                id="audioFiles"
              />
              <h4>Beats/Audio Files</h4>
              <p>Explore works by various artists </p>
            </div></a>
            <a href="#"><div>
              <img
                src={musicImg}
                alt=""
                id="soundPacks"
              />
              <h4>Sound Packs</h4>
              <p>Choose from any of our quality sample packs at affordable rates</p>
            </div></a>
            <a href="#"><div>
              <img
                src={downloadImg}
                alt=""
                id="freeDownloads"
              />
              <h4>Free Downloads</h4>
              <p>Accesss our free instrumentals and beats at no cost</p>
            </div></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrandeitStore;
