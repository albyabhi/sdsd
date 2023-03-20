import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setframe] = useState("Amith")
    const changename = () => {
        setframe("albin")
    }
    return (
        <div>
            <Typography>Welcome {fname}</Typography>
            <Button variant='contained' onClick={changename} >change name</Button>
        </div>
    )
}

export default Statebasics
