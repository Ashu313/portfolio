
import React from "react";
import { useState } from "react";
import ReactTyped from "react-typed";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";


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
                    <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href='#Home'>Home</AnchorLink> </li>
                 
                    <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href="#About1">About</AnchorLink></li>
                    <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href="#Skill">Skill</AnchorLink></li>
                    <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href="#Tech">Tech</AnchorLink></li>
                    <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href="#Project">Project</AnchorLink></li>
                    <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href='#Achieve'>achievement</AnchorLink> </li>
                        <li className="nav_items" onClick={closeMobileMenu}><AnchorLink href='#Contact'>Contact</AnchorLink></li>
                       
                      
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
                   <div className="img-svg">
                <img src = "/images/home-main.svg" alt="My Happy SVG"/>
                </div>
                
                </div>
                <div className="resume">
                    <button type="download"><a href="/images/AshutoshKumar Btech-24.pdf" download>DownloadCv</a><i class="fa fa-download" aria-hidden="true" style={{ color: 'black', font:'25px'}}></i></button>
                </div>
            </div>
     
    )
}
export default Navbar;
