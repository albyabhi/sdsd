import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Numchange = () => {
  var [num1, num2] = useState(0);

  const add = () => {
    num2(num1 + 1)
  }
  const sub = () => {
    num2(num1 - 1)
  }

  return (
    <div>
      <Typography>{num1}</Typography>
      <Button variant='contained' onClick={add}>+</Button>
      <Button variant='contained' onClick={sub}>-</Button>
    </div>
  )
}

export default Numchange

