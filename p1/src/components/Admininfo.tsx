import React, { FC } from 'react'
import { Admin } from './types'

type admininfo = {
    props: Admin
}

const Admininfo:FC<admininfo> = ({props}) => {
  return (
    <div>
        <h2>Adminid: {props.id}</h2>
        <h2>AdminName: {props.name}</h2>
        <h2>AdminEmail: {props.email}</h2>
        <h2>Admin: {props.isAdmin}</h2>
    </div>
  )
}

export default Admininfo