import React from 'react'

function Button({value,onClick,style}) {
  return (
    <button onClick={onClick} style={{margin:"10px",padding:"10px",border:'none',borderRadius:'5px',cursor:"pointer",...style}}>{value}</button>
  )
}

export default Button