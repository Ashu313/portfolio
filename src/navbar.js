
import React from "react";
import { useState } from "react";
import ReactTyped from "react-typed";
import "./navbar.css";

const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    return (


        <div className="navbar-container">
           
           <div className="menu-icons" onClick={handleClick}>
           <i className={click?"fas fa-times":"fas fa-bars"}></i>
           </div>
            <div className="nav-items">
             

                <div className="content-detail" style={{marginTop:"30px"}}>
                <div className={click?"nav-menu active":"nav-menu"}>
                <div className="menu-icons" onClick={handleClick}>
           <i className={click?"fas fa-times":"fas fa-bars"}></i>
           </div>
                    <ul className="nav_flex">
                        <li className="nav_items" onClick={closeMobileMenu}>home</li>
                        <li className="nav_items" onClick={closeMobileMenu}>About</li>
                        <li className="nav_items" onClick={closeMobileMenu}>Services</li>
                        <li className="nav_items" onClick={closeMobileMenu}>Portfolio</li>
                        <li className="nav_items" onClick={closeMobileMenu}>Blog </li>
                      
                        <li className="nav_items"onClick={closeMobileMenu} >content </li>
                    </ul>
                </div>
                </div>
                </div>
                <div className="container">
                   
                    <div className="about_myself">
                    
                    <h1 className="tite_spacing">{" "}
                    <ReactTyped  className={click?"data active":"data"}
                    cursorChar='!'
                    strings={["I'm Ashutosh kumar",
                    "I Love Software Development",
                    "I am a full stack devloper",
                     "i love coding"]}
                    typeSpeed={200}
                    backSpeed={150}
                    loop
                    />
                    </h1>
                   </div>
                
                </div>
                <div className="resume">
                    <button type="download"><a href="/images/ashutosh_kumar.pdf" download>DownloadCv</a><i class="fa fa-download" aria-hidden="true" style={{ color: 'black', font:'25px'}}></i></button>
                </div>
            </div>
     
    )
}
export default Navbar;