import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigate = () => {
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/about')
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default Navigate