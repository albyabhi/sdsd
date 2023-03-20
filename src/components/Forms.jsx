import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Forms = () => {
    var [Inputname, setInputname]=useState({
        fname: "",
        lname: ''
    })
const inputhandler=(e)=>{
    const{name,value}=e.target
    setInputname({...Inputname,[name]:value})
}
  return (
    <div>
         <Typography>First name is {Inputname.fname}</Typography><br></br>
         <TextField label='firstname' variant='outlined' name='fname' value={Inputname.fname}onChange={inputhandler}></TextField>
      <br />
      <br />
      <Typography>last name is {Inputname.lname}</Typography><br></br>
         <TextField label='last name' variant='outlined' name='lname' value={Inputname.lname}onChange={inputhandler}></TextField>
      
    </div>
  )
}

export default Forms
