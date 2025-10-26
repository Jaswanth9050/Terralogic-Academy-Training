import React from "react"
function ChildComponent(props:any){
    return(
        <>
        <p>mypropsdata:{props.mypropsdata}</p>
        <button style={{padding:'10px',margin:"10px",borderRadius:"10px",backgroundColor:"gold",color:"white"}} onClick={props.onButtonClick}>Click me Alert Parent</button>
        </>
    )
}
export default ChildComponent