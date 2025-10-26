import React, { useState } from 'react'

const Theam = () => {
    const [dark,setDark]=useState(true)
    const handleTheme=()=>{
        setDark(!dark)
    }
  return (
    <div>
        <h1>{!dark?"White":"Dark"}</h1>
        <button style={{padding:"15px",margin:"5px",borderRadius:"10px",backgroundColor:`${dark?"black":"white"}`,color:`${dark?"white":"black"}`}} onClick={handleTheme}>
            <p>{dark?"White":"Dark"}</p>
            </button>
         <button
      onClick={handleTheme}
      style={{
        width: "120px",
        height: "50px",
        borderRadius: "30px",
        border: "2px solid gray",
        backgroundColor: dark ? "#222" : "#f4f4f4",
        color: dark ? "white" : "black",
        display: "flex",
        alignItems: "center",
        justifyContent: dark ? "flex-start" : "flex-end", // move emoji
        padding: "5px",
        cursor: "pointer",
        transition: "all 0.10s ease", // smooth animation
      }}
    >
      <span
        style={{
          fontSize: "24px",
          transition: "transform 0.4s ease",
          transform: dark ? "translateX(0)" : "translateX(0)",
        }}
      >
        {dark ? "🌞" : "🌙"}
      </span>
    </button>


    </div>
  )
}

export default Theam