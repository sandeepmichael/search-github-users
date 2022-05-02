import React from 'react'
import {FaGithub} from 'react-icons/fa'
import { Link,  } from 'react-router-dom'

const Navbar = () => {
    return (
       
<div className="navbar mb-2 shadow-lg bg-accent text-neutral-content rounded-box">
  <div className="flex-none px-2 mx-2">
    <span className="text-lg font-bold">
            Github Finder
          </span>
  </div> 
  <div className="flex-1 px-2 mx-2">
    <div className="items-stretch hidden lg:flex">
      <Link to='/' className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link> 
    
      <Link to='/about'className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link> 
   
    </div>
  </div> 
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
     <FaGithub className='text-3xl'/>
    </button>
  </div> 
  
</div>
    )
}

export default Navbar
