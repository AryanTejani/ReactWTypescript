import React from 'react'
import User from './components/User'
import Button from './components/Button'
import Userinfo from './components/Userinfo'
import Admininfo from './components/Admininfo'
import { Admin } from './components/types'


const App = () => {

  const admin: Admin = {
    id: 123,
    name: 'Aryan',
    email: 'hi@gmail.com',
    isAdmin: 'No', // Boolean value for isAdmin
    lastLogin: new Date(), // CamelCase property name
  };
  

  return (
    <div>
      {/* <User name='Aryan' age={19} isStudent={true}/> */}
      {/* <Button label='Hi there You clicked on Button' 
      onclick={()=>console.log('click me')} '
      disable={false}/> */}
      <Userinfo id={123} name='Aryan' email='ji@gmail.com'/>
      <Admininfo props={admin}/>
    </div>
  )
}

export default App