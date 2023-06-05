import React from 'react'

const Navbar = () => {
  return (
   <nav className='navbar'>
   <div className='navbar_text'>
   <div className='logo'>
   <img src='/img/logo.png' alt="logo"/>
   </div>
   <ul className='navbar_ul'>
    <li>
      <a href=''>HOME</a>
    </li>
    <li>
    <a href=''>ADMIN LOGIN</a>
    </li>
    <li>
      <a href=''>REGISTER</a>
    </li>
    <li>
      <a href=''>CONTACT</a>
    </li>
   </ul>
  

   </div>

 
      
    
    
    </nav>
  )
};

export default Navbar;