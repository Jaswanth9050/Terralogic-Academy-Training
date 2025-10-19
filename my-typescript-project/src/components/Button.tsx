import React from 'react';

function Button(props:{name:String}){
    const {name}=props;
    return(
        <button style={{backgroundColor:'blue',color:'white',padding:'10px',borderRadius:'5px',border:'none',margin:'2px'}}>{name} - Click Me</button>
    )
}
export default Button