import { useParams } from "react-router-dom";
import React from "react";
// Params what every we write in url that will get as value
function Post(){
    const {id}=useParams();
    return <div style={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <h2>Post ID:{id}</h2>
    </div>
}
export default Post