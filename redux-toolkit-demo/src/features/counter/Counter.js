import React, { useState } from "react";
import {useSelector ,useDispatch} from "react-redux"
import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "./counterSlice";

export default function Counter(){
    const value=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    const [amount,setAmount]=useState(0);

    return(
        <div style={{textAlign:"center",marginTop:40}}>
            <h2>Counter:{value}</h2>
            <div style={{
                display:"flex",gap:8,justifyContent:"center",marginBottom:12
            }}>
                <button onClick={()=>dispatch(decrement())}>-1</button>
                <button onClick={()=>dispatch(reset())}>Reset</button>
                <button onClick={()=>dispatch(increment())}>+1</button>
            </div>
            

            <div style={{marginTop:20}}>
                <button onClick={()=>dispatch(decrementByAmount(Number(amount)||0))}>Decrement Number</button>
                <input type="number" onChange={(e)=>setAmount(Number(e.target.value))} value={amount} style={{width:80,marginRight:8}}/>
                <button onClick={()=>dispatch(incrementByAmount(Number(amount)||0))}>Add Number</button>
            </div>
        </div>
    )
}


