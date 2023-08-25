import React from 'react'
import "./Header.css"  
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header" >
        <div className="logoContainer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xbiWk7S3rI1e5l2iLgz1FW30-6j0H4pkFw&usqp=CAU"alt="logo" width={150}/>
        </div>
        <div className="navLinks " >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about us">About Us</Link></li>
                <li><Link to="/contact us">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>

        </div>
    </div> 
  )
}

export default Header