import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Post{
    id:number;
    title:string;
    body:string
}


const PostList = () => {
    const [posts,setPosts]=useState<Post[]>([])
    useEffect(()=>{
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{setPosts(response.data)})
        .catch(error=>{console.log(`error Fetching data:`,error)})

    },[])
    useEffect(()=>{
        axios.post<Post[]>('https://jsonplaceholder.typicode.com/posts',{
        })
    })

  return (
    <>
        <ul>
            {posts.map(post=>
                <li>{post.title}</li>
            )}
        </ul>
    </>
  )
}

export default PostList