import React from 'react'

const ArrayTraversal = () => {
    const items:undefined | any[]=[];
  return (
    <>
        <ol>
            {items?.map(item=>(
                <li>{item}</li>
            ))}
        </ol>
    </>
  )
}

export default ArrayTraversal

// import React from 'react'

// const ArrayTraversal = () => {
//     const items:undefined | any[]=[1,2,3,4,"Kiran",[1,2,3],false];
//   return (
//     <>
//         <ol>
//             {items?.map(item=>(
//                 <li>{item}</li>
//             ))}
//         </ol>
//     </>
//   )
// }

// export default ArrayTraversal