import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count===0){
            setCount(0)
        }else{
            setCount(count-1)
        }
        //  setCount(count-1)

    }
  return (
    <div>
        <p>Count:{count>=0?count: null}</p>
        <button style={{padding:'10px',borderRadius:"10px",backgroundColor:"blue",color:"white"}} onClick={increment}>increment</button>
        {/* <button style={{padding:'10px',borderRadius:"10px",backgroundColor:"red",color:"white"}}  onClick={decrement}>decrement</button> */}
        <button style={{padding:'10px',borderRadius:"10px",backgroundColor:"red",color:"white"}}  onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter