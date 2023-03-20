import React from 'react'

const Num = () => {
    var varname3=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <ul align='left'>
        {varname3.map((value,index)=>{return <li key={index}>{value}</li>})}
        </ul>
    </div>
  )
}

export default Num
