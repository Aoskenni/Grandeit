import React from 'react';
const TrackList = () => {
  const allBeatsLists = [
    {
      id: 0,
      title: "Ama",
      photo: "src/assets/Ama.png",
      bpm: 100,
      tags: "Afrobeats",
      duration: "2:49",
      src: "src/assets/Ama-Tagged.mp3",
      download: " ",
      Buy: " ",
    },
    {
      id: 0,
      title: "Friday",
      photo: "src/assets/Friday.png",
      bpm: 200,
      tags: "Afrobeats",
      duration: "2:21",
      src: "src/assets/Friday-Tagged.mp3",
      download: " ",
      buy: " ",
    },
    {
      id: 0,
      title: "Call Me",
      photo: "src/assets/Call-me.png",
      bpm: 300,
      tags: "Afrobeats",
      duration: "2:43",
      src: "src/assets/Call-Me-Tagged.mp3",
      download: " ",
      buy: " ",
    },
    {
      id: 0,
      title: "Onye",
      photo: "src/assets/Onye.png",
      bpm: 400,
      tags: "Afrobeats",
      duration: "2:48",
      src: "src/assets/Onye-Tagged.mp3",
      download: " ",
      buy: " ",
    },

    {
      id: 0,
      title: "Lonley",
      photo: "src/assets/lonely.png",
      bpm: 100,
      tags: "Afrobeats",
      duration: "2:24",
      src: "src/assets/Lonely-Tagged.mp3",
      download: " ",
      Buy: " ",
    },
    {
      id: 0,
      title: "Many Things",
      photo: "src/assets/many-things.png",
      bpm: 200,
      tags: "Afrobeats",
      duration: "2:46",
      src: "src/assets/Many-Things-Tagged.mp3",
      download: " ",
      buy: " ",
    },
    {
      id: 0,
      title: "Runaway",
      photo: "src/assets/runaway.png",
      bpm: 300,
      tags: "Afrobeats",
      duration: "2:36",
      src: "src/assets/Runaway-Tagged.mp3",
      download: " ",
      buy: " ",
    },
    {
      id: 0,
      title: "Tension",
      photo: "src/assets/Tension.png",
      bpm: 400,
      tags: "Afrobeats",
      duration: "2:44",
      src: "src/assets/Tension-Tagged.mp3",
      download: " ",
      buy: " ",
    },
    {
      id: 0,
      title: "Efforts",
      photo: "src/assets/efforts-img.png",
      bpm: 400,
      tags: "Afrobeats",
      duration: "2:42",
      src: "src/assets/Efforts-Tagged.mp3",
      download: " ",
      buy: " ",
    },
    {
      id: 0,
      title: "Cincinnati",
      photo: "src/assets/cincinnanti.png",
      bpm: 400,
      tags: "Afrobeats",
      duration: "2:58",
      src: "src/assets/Cincinnati-Tagged.mp3",
      download: " ",
      buy: " ",
    },
  ];
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0); // Current song index
  const [currentSongPhoto, setCurrentSongPhoto] = React.useState(allBeatsLists[6].photo);
  const [currentSongTitle, setCurrentSongTitle] = React.useState('');
  const [isPlaying, setIsPlaying] = React.useState(false); // New state variable for play/pause
  const [currentTime, setCurrentTime] = React.useState(0); // Current time of the song
  const [duration, setDuration] = React.useState(0); // Total duration of the song
  const audio = React.useRef(new Audio());
  let userData = {
    beats: [...allBeatsLists],
    currentSong: null,
    songCurrentTime: 0,
  };
  
  const handlePlayBeat = (src, photo) => {
    
      // If the same song is clicked, toggle play/pause
      if (isPlaying) {
        audio.current.pause();
        setIsPlaying(false);
      }  else {
      // If a different song is clicked
      audio.current.src = src;
      audio.current.play();
      userData.currentSong = src;
      setCurrentSongPhoto(photo);
      setCurrentSongTitle(src.split('/').pop());
      setIsPlaying(true);
      audio.current.onloadedmetadata = () => {
        setDuration(audio.current.duration); // Set the duration when the metadata is loaded
      };
    }
    
  };
  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % allBeatsLists.length; // Loop back to the first song
    setCurrentSongIndex(nextIndex); // Update the current song index
    handlePlayBeat(allBeatsLists[nextIndex].src, allBeatsLists[nextIndex].photo); // Play the next song
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + allBeatsLists.length) % allBeatsLists.length; // Loop back to the last song
    setCurrentSongIndex(prevIndex); // Update the current song index
    handlePlayBeat(allBeatsLists[prevIndex].src, allBeatsLists[prevIndex].photo); // Play the previous song
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime); // Update the current time
  };

  const handleRangeChange = (e) => {
    const newTime = e.target.value;
    audio.current.currentTime = newTime; // Seek to the new time
    setCurrentTime(newTime); // Update the current time in state
  };

  React.useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePause = () => {
    audio.current.pause();
    setIsPlaying(false);
  };
  const handlePlay = () => {
    audio.current.play();
    setIsPlaying(true);
  }
  
  
  return (
    <>
      <div className="playlist-container">
        <div className="songs-info">
          <div className="current-playing-info">
            <div className="current-playing-info-container">
            <div className="info-flex">
              <div className="current-song-disp">
                <img
                  
                  src={currentSongPhoto}
                  alt=""
                  id="albumDisplay"
                />
              </div>
              <span className="playbtn-beat">
                
              <button onClick={() => isPlaying ? handlePause() : handlePlay()}>
                  <i className= {isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play"} style={{ color: "#000" }}></i>
                </button>
                <span>{userData.currentSong ? userData.currentSong : currentSongTitle}</span>
              </span>
            </div>
            <input type="range" id="range" min="0" max={duration} value={currentTime} onChange={handleRangeChange}/>
            <span>{new Date(currentTime * 1000).toISOString().substr(11, 8)}</span>
            <div className="player-controls">
              <button id="backwardBtn" onClick={handlePreviousSong}>
                <i class="fa-solid fa-backward-step"></i>
              </button>
              <button id="fowardBtn" onClick={handleNextSong}>
                <i class="fa-solid fa-forward-step"></i>
              </button>
            </div>
            </div>
          </div>

          <div className="beats-playlist">
            <div id="beatsLists">
              {allBeatsLists.map((beat, index) => (
                <div className="beats-photo-title" key={index} onClick={() => handlePlayBeat(beat.src, beat.photo)}>
                  <div className="beat-photo-cover" >
                    <img className="beat-photo" src={beat.photo} alt={beat.title} />
                    <span className="beat-title">{beat.title}</span>
                  </div>
                  
                  <div className="beat-description">
                    <span>{beat.duration}</span>
                    <span>{beat.tags}</span>
                    <span>{beat.bpm}</span>
                  </div>
          
                  <div className="download-cart">
                    <button onClick={() => handleDownload(beat.src)}>Download <i className="fa-solid fa-download" style={{ color: "#fff" }}></i></button>
                    <button onClick={() => handleDownload(beat.src)}><i className="fa-solid fa-cart-shopping" style={{ color: "#fff" }}></i></button>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackList;
