import React from 'react'

const ButtonCheck = () => {
    const handlebutton=()=>{
        alert('button clicked')
    }
    const handledbbutton=()=>{
        alert('Double Time clicked')
    }
  return (
    <div>
        <button style={{padding:'10px',borderRadius:"10px",backgroundColor:"gold",color:"white"}} onClick={handlebutton}>Click Me</button>
        <button style={{padding:'10px',borderRadius:"10px",backgroundColor:"red",color:"white"}} onDoubleClick={handledbbutton}>Double Time Click Me</button>
    </div>
  )
}

export default ButtonCheck