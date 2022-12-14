import React from "react";
import "./project.css"
import { useState } from "react";
import { NavLink, Route } from "react-router-dom";



const Project=()=>{

  const [show,setShow]=useState(false);
  const More=()=>{
    setShow(!show);
  }
    return(
        
          <section className='contact-form' id="Project">
            <h1 class="heading">
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>


            </h1>
       <div className="container-d_flex">
         
         <div className="project">
            <div className="project-image">
            <img src="/images/todo.jpg" alt=""></img>
            </div>
            <div className="project-detail">
                <h1>To-do List</h1>
               
               <div className="i-name">
               <a href="https://ashu313.github.io/" target='_blank' rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
                 <a href='https://github.com/Ashu313/Ashu313.github.io' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                 </div>
                <div className="butt">
              
                <button type="button" onClick={More}>{show?'ShowLess':'ShowMore'}</button>
                </div>
                <div className={show?'d':'d active'}>
                <p>A responsive to-do list with html, CSS, and JavaScript. The user data will be saved in computer local storage and can be accessed anytime.
</p>
</div>
            </div>
         </div>
         <div className="project">
            <div className="project-image">
            <img src="/images/ip.jpg" alt=""></img>
            </div>
            <div className="project-detail">
                <h1>Ip-Address Tracker</h1>
                <div className="i-name">
                <a href="http://ip-address-tracker-ashu313.vercel.app/" target='_blank' rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
                 <a href='https://github.com/Ashu313/ip-address-tracker' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
               </div>
                <div className="butt">
                <button type="button" onClick={More}>{show?'ShowLess':'ShowMore'}</button>
                </div>
                <div className={show?'d':'d active'}>
                <p>Build IP-Address-Tracker app using Geolocation and Leaflet Js users will be able to:</p>
                  <ul>
                    <li>1.View the optimal layout for each page depending on their device's screen size.</li>
                    <li>2. See hover states for all interactive elements on the page.</li>
                    <li>3.See their own IP Address on the map on the initial page load.</li>
                    <li>4.Search for any IP addresses or domains and see the key information and location</li>
                  </ul>
            </div>
            </div>
         </div>
         <div className="project">
            <div className="project-image">
            <img src="/images/wildlife.jpg" alt=""></img>
            </div>
            <div className="project-detail">
                <h1>Wildlife World</h1> 
                <div className="i-name">
                 <a href="https://wildlifeworld.vercel.app/" target='_blank' rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
                 <a href='https://github.com/Ashu313/wildlifeworld' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
               </div>
                <div className="butt">
                <button type="button" onClick={More}>{show?'ShowLess':'ShowMore'}</button>
                </div>
                <p>{show?'Created a multipage website using ReactJS,Html,Css':''}</p>
            </div>
         </div>
         
       </div>
       </section>
      
    )
}
export default Project;