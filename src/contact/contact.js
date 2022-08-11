
import React from "react";
import "./contact.css"
const Contact=()=>{

    return(
      <section className='contact-form'>
      <h1 class="heading">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
             <span>A</span>
            <span>C</span>
            <span>T</span>
            

        </h1>


    <div className="contact-container">
      
      <div className="d_flex">
        
        <div className="contact-detail">
            <h1>Hire Me</h1>
            <p>I am avilable for software related work</p>
            <div className="contact-me">
                <div className="d_flex">
                   <div className="details">
                   <i className='fab fa-facebook-f'></i>
                   <i class="fa-solid fa-phone"></i>
               
                <i class="fas fa-envelope"></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                
                <i className='fab fa-youtube'></i>
                   </div>
                </div>
            </div>
          <div className="contact-menu">
            <input name="name" placeholder="enter your name"></input>
            <input name="email" placeholder="enter your email"></input>
            <input name="subject" placeholder="write a subject"></input>
           <textarea name="description "cols="30" rows="9" placeholder="write a message"></textarea>
           <button type="submit" style={{background:'green',color:'white'}}>Submit</button>
          </div>
       

        </div>
        <div className="image-data">
            <img src="/images/11.png" alt="sjs"></img>
        </div>
    </div>
    </div>
    </section>
    );
}
export default Contact;