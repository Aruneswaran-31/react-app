import React, { useContext, useState } from 'react'
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';
function Login() {
    const[username,setUserName]= useState('');
    const[password,setPassword]= useState('');
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const handleSubmit = (e) => {
        e.preventDefault();
        if(login(username,password)){
            navigate('/dashboard');
        }
        else{
            alert('Invalid Username & Password');
        }
    }
    
  return (
    <div>
        <h3>Login page</h3>
        <form onSubmit={handleSubmit}>
            <label>Enter username</label>
            <input type='text' placeholder='username' onChange={(e) => setUserName(e.target.value)}style={{margin:'10px',padding:'7px'}} required></input>
            <label>Enter password</label>
            <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} style={{margin:'10px',padding:'7px'}} required></input>
            <button type='submit' style={{margin:'10px',padding:'7px'}}>Login</button>
        </form>
    </div>
  )
}
export default Login;