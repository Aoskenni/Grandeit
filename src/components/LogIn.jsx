/* import React from 'react'

const LogIn = () => {
  return (
    <>
    <form className="register-container">
        <input type="text" id='name' placeholder='Full Name'/>
        <input type="email" id='email' placeholder='Email' />
        <input type="number" id='mobileNumber' placeholder='Mobile Number'/>
        <input type="password" id='password' />
        <button>Register</button>
    </form>
    </>
  )
}

export default LogIn */







import React, {useEffect, useState} from 'react'
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

export default LogIn