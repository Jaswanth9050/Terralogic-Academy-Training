import React from 'react'

const ListUseage = () => {
    const items=[
        {id:1,name:"jas"},
        {id:2,name:"kiran"},
        {id:3,name:"sudheer"},
        {id:4,name:"sai"}
    ]
  return (
    <>
        <ul>
            {items.map(item=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

export default ListUseage