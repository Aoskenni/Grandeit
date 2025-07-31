import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


const LogIn = () => {
  
  return (
    <>
    <Header />
    <form className="login-container">
        
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <button>Sign In</button>
        
    </form>
    <p className="p-a">Don't have an account?<Link className="p-a-link"to="/register"> Register.</Link></p>
    
    </>
  )
}

export default LogIn







/* import React, {useEffect, useState} from 'react'
import axios from 'axios'

const LogIn = () => {
    const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  )
}

export default LogIn */