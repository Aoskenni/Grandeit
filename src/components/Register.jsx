import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header';
const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [country, setCountry] = useState("");
const [gender, setGender] = useState("");
const [mobileNo, setMobileNo] = useState("");
const [password, setPassword] = useState("");

const handleSubmitRegForm = async (e) => {
  e.preventDefault();
  let result = await fetch(
        'http://localhost:5173/register', {
            method: "post",
            body: JSON.stringify({ name, email, country, gender, mobileNo, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
            setCountry("");
            setGender("");
            setMobileNo("");
            setPassword("");
        }
}



  return (
    <>
    <Header />
    <form action="" className="register-container">
        <input type="text" id="fullname" placeholder="Full Name" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="text" id="country" placeholder="Country" value={country} onChange={(e)=> setCountry(e.target.value)}  />
        <select name="gender" id="gender" value={gender} onChange={(e)=> setGender(e.target.value)}>
          <option hidden >Choose a gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="email" id="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="tel" id="phoneNo" placeholder="Mobile Number" value={mobileNo} onChange={(e)=> setMobileNo(e.target.value)}/>
        <input type="password" id="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit" onClick={handleSubmitRegForm}>Sign Up</button>
    </form>
    </>
  )
}

export default Register