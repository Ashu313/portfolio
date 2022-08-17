import React from "react";

import "./footer.css";
import { useEffect } from "react";

const Footer=()=>{

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  

    return(

        <section className='contact-form' id="Footer">
        <h1 class="heading">
            <span>F</span>
            <span>O</span>
            <span>O</span>
            <span>T</span>
            <span>E</span>
            <span>R</span>
          


        </h1>
        <div className="center">
            <h1 style={{font:'30px',textAlign:'center'}}>Made by <span>Ashutosh kumar</span>😀😊😄</h1>
            <div className="con">
            <button className="i-bar"  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
        </div>
        </div>
        
      
        </section>
    )
}
export default Footer;