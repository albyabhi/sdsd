import { Typography } from '@mui/material'
import React from 'react'

const Comp1 = () => {
    var varname=["Alby","amith","albin","akash"]
    var varname1=["Alby"]
    return (
    <div>
      {
  
}
<Typography variant="h1" component="h2">
 welcome {varname1}
</Typography>
{varname.map((value,index)=>{return <li key={index}>{value}</li>})}

    </div>
  )
}

export default Comp1
