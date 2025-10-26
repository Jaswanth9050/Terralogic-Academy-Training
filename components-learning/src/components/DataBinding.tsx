// import React, { useState } from 'react'

// const DataBinding = () => {
//     const [name,setName]=useState('')
//     const handleinput=(event:string)=>{
//         setName(event.target.value)
//     }
//   return (
//     <div>
//         <p>{name}</p>
//         <input type="text" value={name} onChange={handleinput}/>
//     </div>
//   )
// }

// export default DataBinding


// import React, { useState, ChangeEvent } from 'react';

// const DataBinding: React.FC = () => {
//   const [name, setName] = useState<string>('');

//   const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   return (
//     <div>
//       <p>{name}</p>
//       <input type="text" value={name} onChange={handleInput} />
//     </div>
//   );
// };

// export default DataBinding; 


import React, { useState, } from 'react';

const DataBinding = () => {
  const [data, setData] = useState<any>({
    name:'',
    password:''
  });

  const handleInput = (event: any) => {
    setData({...data,name:event.target.value});
  };
  const handlepassword=(event:any)=>{
    setData({...data,password:event.target.value});
  }

  const handlesubmit=(e:any)=>{
    e.preventDefault()
    console.log(`${data.name}+${data.password}`)
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <p>{data.name}{data.password}</p>
      <input type="text" value={data.name} onChange={handleInput} />
      <input type="password" value={data.password} onChange={handlepassword} />
      <button>Submit</button>
      </form>
    </div>
  );
};

export default DataBinding;



// import React, { useState, } from 'react';

// const DataBinding = () => {
//   const [name, setName] = useState<any>();
//   const [password, setPassword] = useState<any>();

//   const handleInput = (event: any) => {
//     setName(event.target.value);
//   };
//   const handlepassword=(event:any)=>{
//     setPassword(event.target.value);
//   }

//   const handlesubmit=(e:any)=>{
//     e.preventDefault();
//     console.log(`${name} and ${password}`)
//   }
//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <p>{name}.{password}</p>
//         <input type="text" value={name} onChange={handleInput} />
//         <input type="password" value={password} onChange={handlepassword} />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DataBinding;
