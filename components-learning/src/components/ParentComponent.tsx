import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent(){
    const[data,setData]=useState<any>('data from parent')
    const handleChildClick=()=>{
        alert('Alert from the child')
    }
    return(
        <ChildComponent onButtonClick={handleChildClick} mypropsdata={data} />
    )
}
export default ParentComponent