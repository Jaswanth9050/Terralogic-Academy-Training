import React from 'react'

type IProps={
  isLoggedin:boolean;
  isDefaultprop ? :boolean;
};
const ConditionRendering = (props:any) => {
const {isLoggedin,isDefaultprop='No Val From Parent'}=props;
console.log('DefaultProps',isDefaultprop)

const checkIfUserHasAccount=(hasAccount:boolean)=>{
  // if(hasAccount){
  //   return <h1>User Can Login</h1>
  // }else{
  //   return <h1>User Need to Register</h1>
  // }
  if(hasAccount) return <h1>User Can Login</h1>
  return <h1>User Need to Register</h1>
}
  return (
    <>{isLoggedin?<h1>Yes User Logged in {isDefaultprop}</h1>:checkIfUserHasAccount(false)}</>
  )
}

export default ConditionRendering