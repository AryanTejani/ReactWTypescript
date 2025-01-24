import React from 'react'

interface button {
    label:string,
    onclick : ()=>void,
    disable:boolean
}

const Button = (props:button) => {
  return (
    <div>
        {/* <h2>{props.label}</h2> */}
        <button onClick={props.onclick} disabled={props.disable}>{props.label}</button>
        {/* <h2>{props.disable}</h2> */}
    </div>
  )
}

export default Button