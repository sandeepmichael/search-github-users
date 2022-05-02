import React from 'react'

const footeryear = new Date().getFullYear()

const Footer = () => {
    return (
       
   
<footer className=" p-10 footer bg-accent text-primary-content footer-center">
    <div className='container'>
        <p>Copyright &copy; {footeryear}</p>
    </div>
 
    </ footer>
    )
}

export default Footer
