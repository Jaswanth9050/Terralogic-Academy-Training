import React, { useEffect, useState } from "react";

const FunctionalLifeCycle=()=>{
    const [count,setCount]=useState<number>(0)
    useEffect(()=>{
        console.log("Component Mounted")
        return()=>{
            console.log("Component UnMounted")
        }
    },[])

    useEffect(()=>{
        console.log("Component Update:Count Changed to",count)
    },[count])
    // const handle=()=>{
    //     setCount(count+1)
    // }

    return(
        <>
            <h1>Function Life Cycle Demo</h1>
            <p>count:{count}</p>
            <div>
                <button style={{backgroundColor:"green",color:"white",padding:"10px",margin:"10px",borderRadius:"10px",border:"1px solid white"}} onClick={()=>setCount((p)=>p+1)}>Incrememt</button>
            <button style={{backgroundColor:"blue",color:"white",padding:"10px",margin:"10px",borderRadius:"10px",border:"1px solid white"}} onClick={()=>setCount(0)}>Reset</button>
            <button style={{backgroundColor:"red",color:"white",padding:"10px",margin:"10px",borderRadius:"10px",border:"1px solid white"}} onClick={()=>setCount((p)=>p-1)}>decrememt</button>
            </div>
        </>
    )
}

export default FunctionalLifeCycle