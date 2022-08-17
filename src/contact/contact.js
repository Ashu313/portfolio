
import React from "react";
import "./contact.css"
const Contact=()=>{

    return(
      <section className='contact-form' id='Contact'>
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
            <p>I am available for software related work</p>
            <div className="contact-me">
                <div className="d_flex">
                   <div className="details">
                   <a href='https://m.facebook.com/ashutoshkumar.kumar.96' target='_blank'  rel="noreferrer"><i className='fab fa-facebook-f kk'></i></a>
                   <i class="fa-solid fa-phone kk">8936039203</i>
                   <i class="fa-brands fa-whatsapp kk">9955611988</i>
                <i class="fas fa-envelope kk">Kashutosh727@gmail.com</i>
                <a href='https://www.linkedin.com/in/ashutosh-kumar-325353218/' target='_blank'  rel="noreferrer"><i className='fab fa-linkedin kk'></i></a>
              
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