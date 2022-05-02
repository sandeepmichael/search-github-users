import React from 'react'
import { Link } from 'react-router-dom'

const About = () => { 


    return (
        <div>
             
<div className="card lg:card-side card-bordered">
  <figure>
    <img className='rounded-full shadow w-14 h-15' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt='profile'/>
  </figure> 
  <div className="card-body">
    <h2 className="card-title text-5xl font-bold ">About Me</h2> 
    <p className='text-2xl'>I'm Sandeep currently pursuing Btech.iam passionate about creating real world projects.</p> 
    <div className="card-actions">
      <Link to='/' className="btn btn-primary">Back To Home</Link> 
   
    </div>
  </div>
</div>

        </div>

    )
}

export default About
