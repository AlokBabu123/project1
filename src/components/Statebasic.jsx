import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname] =useState("Tiya")
    const changeName=()=>{
        setfname("mridula")
    }


  return (
    <div>
      <Typography variant='h6'>Welcome {fname}</Typography>
      <Button variant ='contained' color="primary" onClick={changeName}>change</Button><br></br>
      <Button variant ="outlined" color="success" >galary</Button><br></br>
      <Button variant ="text" color="error">contact</Button>
    </div>
  )
}

export default Statebasic
