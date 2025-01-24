import React from 'react'
import { User } from './types'
const Userinfo = (props:User) => {
  return (
    <div>
        <h2>Useid: {props.id}</h2>
        <h2>UserName: {props.name}</h2>
        <h2>USeremail: {props.email}</h2>
    </div>
  )
}

export default Userinfo