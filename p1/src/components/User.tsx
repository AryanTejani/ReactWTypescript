import React, { FC } from 'react'


type Usershape = {
    name:string,
    age:number,
    isStudent:boolean
}

const User:FC <Usershape> = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.isStudent}</h2>
    </div>
  )
}


// ALSO WE CAN USE INTERFACES FOR PROPS TO GIVE TYPES.

// const User = (props:{name:string,age:number,isStudent:boolean})=>{
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <h2>{props.age}</h2>
//             <h2>{props.isStudent}</h2>
//         </div>
//       )
// }

export default User