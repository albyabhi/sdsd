import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[name,setname]= useState("")

const changename=(event)=>{
    const{name,value}=event.target;
    setname(value);
}
useEffect(()=>{
    setname("Name")
},[])
var[name1,setname1]= useState("")

const changename1=(event)=>{
    const{name,value}=event.target;
    setname1(value);
}
useEffect(()=>{
    setname("Name")
},[])
    

  return (
    <div>
      <Typography variant='h2'>My name is <i>{name}</i></Typography>
      <br />
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>changename(e)}/>
      <br />
      <br />
      <Typography variant='h2'>My name is <i>{name1}</i></Typography>
      <br />
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=>changename1(e)}/>
      <br />
      <br />


      
    </div>
  )
}

export default Name
