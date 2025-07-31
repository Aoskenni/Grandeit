import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';



const FreeDownloads = () => {
    const [data, setData] = useState("");
    
      useEffect(() => {
        axios.get('/message')
        .then( response => {
            setData(response.data.message);
        })
        .catch(error => {
        console.error(error);
      });
        /* fetch("http://localhost:8000/message")
          .then((res) => res.json())
          .then((data) => setMessage(data.message)); */
      }, []);

  return (
    <>
    <div>FreeDownloads</div>
    <h1>React and Node.js Integration</h1>
    <p>Message from the server: {data}</p>
    </>
  )
}

export default FreeDownloads