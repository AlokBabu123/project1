import React from 'react'
import { Button, TextField } from '@mui/material';


const Login = () => {
  return (
    <div> 
    <h1>alok</h1>
    <input placeholder = "user name"/>
    <input type = "password" placeholder = "password"/>
    <br/>
    <br/>
    <TextField label='username' variant= "standard"></TextField>
    <Button variant = 'contained' color="success">Login</Button>
   
      
    </div>
  )
}

export default Login
