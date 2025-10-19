import React from 'react'
import logo from '../logo.svg'
const Card = (props:{name:String,age:number,course:String,company:String}) => {
    const {name,age,course,company}=props
  return (
    <div style={{width:'250px',border:'2px solid white',padding:'10px',borderRadius:'5px',margin:'10px',boxShadow:'10px 2px 33px gray',background: '#0e4b4ecc'}}>
        <img src={logo} alt='logo'/>
        <h3>Name:{name}</h3>
        <h4>Age:{age}</h4>
        <h5>Course:{course}</h5>
        <p>Company:{company}</p>
        <button style={{padding:'15px',borderRadius:'10px',background:'blue',color:'white',border:'1px solid white'}}>View More</button>
    </div>
  )
}

export default Card