import axios from 'axios';
import { error } from 'console';
import React, { useEffect, useState } from 'react'


interface Photo{
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string
}
const PhotoList = () => {
    const [data,setData]=useState<Photo[]>([])
    useEffect(()=>{
        axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{setData(response.data)})
        .catch(error=>{console.log(`error Fetching Data`,error)})
    },[])
    console.log(data)

  return (
    <>
            {data.map(item=>(
                <div key={item.id}>
                    <p>{item.title}</p>
                    <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="" />
                    <p>{item.url}</p>
                </div>  
            ))}
    </>
  )
}

export default PhotoList