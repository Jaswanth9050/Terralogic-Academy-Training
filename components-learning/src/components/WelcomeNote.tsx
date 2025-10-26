import React from 'react'

const WelcomeNote = (props:any) => {
    const isLoggedin=props.isLoggedin;
    if(isLoggedin){

        return (
          <div>WelcomeNote</div>
        )
    }else{
        return (
          <div>Pleace Loogin</div>
        )
    }
}

export const Greeting = (props:any) => {
  return (
    <>
        {props.isLoggedin ?(
            props.isAuthorized?
                <h1>Your are Authorized</h1>
            :
                <h1>Only Authorized </h1>
            
    ):(
        <h1>Pleace Loggedin</h1>
    )}
    </>
  )
}

export default WelcomeNote