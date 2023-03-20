import { Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [aname,setaname]= useState("")
    const home = () => {
        setaname("home page")
    }
    const gallery = () => {
        setaname("gallery")
    }
    const contact = () => {
       setaname("contact")
    }
  return (
    <div>
        <button varient='contained' color='primary' onClick={home}>home page</button>
        <button varient='contained' color='secondary' onClick={gallery}>gallery page</button> 
        <button varient='contained' color='success' onClick={contact}>contact page</button>  
        <Typography>Welcome to {aname}</Typography>
      
    </div>
  )
}

export default State
