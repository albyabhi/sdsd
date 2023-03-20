import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablename = () => {
    var pname=[{name:"amith",age:48,place:"paravur"},
    {name:"albin",age:68,place:"paravur"},
    {name:"alby",age:28,place:"ijk"}]
  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell>place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value,index)=>{
                        return <TableRow>
                            <TableCell key={index}>{value.name}</TableCell>
                            <TableCell key={index}>{value.place}</TableCell>
                            <TableCell key={index}>{value.age}</TableCell>
                        </TableRow>
                        })}
                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}

export default Tablename
