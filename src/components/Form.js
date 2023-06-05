import React, { useState } from 'react'

const Form = () => {

    const [popupStyle, showPopup]=useState("hide")
    const popup=() =>{
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
  return (
 

   <div className='cover'>
    <h1> ISSUER LOGIN</h1>
    <input type='text' placeholder='username'/>
    <input type='password' placeholder='password'/>

    <div className='login-btn'onClick={popup}> LOGIN</div>

    <p className='text'> Or login using</p>

    <div className='alt-login'>
    <div className='google'></div>
     </div>
<div className={popupStyle}>
    <h3>Login Failed</h3>
    <p>Username or Password Incorrect</p>
</div>
   </div>



  )
}

export default Form