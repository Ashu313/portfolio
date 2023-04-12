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
         
      
   <div className="project">
            <div className="project-image">
            <img src="/images/chatApp.png" alt=""></img>
            </div>
            <div className="project-detail">
                <h1>Messenger Chat App</h1> 
                <div className="i-name">
                 <a href="http://chat-app-51cd3.web.app/" target='_blank' rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
                 <a href='https://github.com/Ashu313/MyChat' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
               </div>
                <div className="butt">
                <button type="button" onClick={More}>{show?'ShowLess':'ShowMore'}</button>
                </div>
                 <div className={show?'d':'d active'}>
                <p>created a Messanger Chat App using react js as frontend and firebase as backend</p>
                  <ul>
                    <li>Implemented user authentications
</li>
                    <li>Implemented search for the specic user through email i</li>
                    <li>Implemented last seen features, live typing</li>
                    <li>Implemented custom emoji, voice recorder, speech translation features</li>
                  </ul>
            </div>
            </div>
         </div>
         <div className="project">
            <div className="project-image">
            <img src="/images/Screenshot (74).png" alt=""></img>
            </div>
            <div className="project-detail">
                <h1>Cashbook</h1> 
                <div className="i-name">
                 <a href="https://cashbook-1244.web.app/" target='_blank' rel="noreferrer"><i class="fa-solid fa-globe"></i></a>
                 <a href='https://github.com/Ashu313/cashbook' target='_blank' rel="noreferrer"><i class="fa-brands fa-github"></i></a>
               </div>
                <div className="butt">
                <button type="button" onClick={More}>{show?'ShowLess':'ShowMore'}</button>
                </div>
                 <div className={show?'d':'d active'}>
 
                <p>Created a Cashbook for both admin and user Panel and </p>
                  <ul>
                    <li>  Implemented a MERN stack expense app with two panels for admin and user.
</li>
                    <li> Developed user authentication and authorization using Passport.js and JWT tokens</li>
                    <li>Implemented pagination, search, and filtering functionality for the expenses and income table.</li>
                    <li>Implemented data visualization in the form of graphs for the admin panel and user to display income and expense data</li>
                  </ul>
            </div>
            </div>
         </div>
       
         
    </div>
       </section>
      
    )
}
export default Project;
