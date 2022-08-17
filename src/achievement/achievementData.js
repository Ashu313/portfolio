import React from "react";
import "./achievement.css";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


const Achieve=()=>{
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <section className='contact-form' id="Achieve">
        <h1 class="heading">
            <span>A</span>
            <span>C</span>
            <span>H</span>
            <span>I</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>

        </h1>

            <div className="project-us-container" >
                <div className="project-us-detail" >
                  
                 
                    <div className="image"   >
                        <img src="/images/certificate_page-0001.jpg" alt="a" data-aos="fade-right"></img>
                    
                        </div>
                   
                      
                  
                  
                
                    <div className="project-myself">
                        <div className="title_flex" data-aos="zoom-in-down" >
                        <h1 style={{font:'35px',textAlign:'center'}}><span style={{font:'35px',textAlign:'center'}}>Coding ninjas</span></h1>
                        
                         <p>Secured rank 1373 out of 1.5lakh+participant</p>
                          </div>
                       
                    </div>
                    
                    
                    
                    </div>
                    <div className="project-us-detail">
                  
                 
                    <div className="image1">
                        <img src="/images/ashu_1244-SNCK1A21 (1)_page-0001.jpg" alt="a" data-aos="fade-left"></img>
                    
                        </div>
                      
                  
                  
                
                    <div className="project-myself">
                        <div className="title_flex" data-aos="zoom-in-down" >
                        <h1 style={{font:'35px'}}><span>Snackdown</span></h1>
                       <p>Qualified for snackdown 2021 round 1a</p>
                          </div>
                       
                    </div>
                    
                    
                    
                    </div>
                    <div className="project-us-detail">
                  
                 
                  <div className="image">
                      <img src="/images/tech gig_page-0001.jpg" alt="a" data-aos="fade-right" ></img>
                  
                      </div>
                    
                
                
              
                  <div className="project-myself">
                      <div className="title_flex" data-aos="zoom-in-down" >
                      <h1 style={{font:'35px'}}><span>Tech gig</span></h1>
                      
                        <p>Qualified code gladiator semifinal and secured rank 269th out of 4.5lakh+participant</p>
                        </div>
                     
                  </div>
                  
                  
                  
                  </div>
                   
                  <div className="project-us-detail">
                  
                 
                  <div className="image1">
                      <img src="/images/00000000008caba4.jpg" alt="a" data-aos="fade-left"></img>
                       
                      </div>
                    
                
                
              
                  <div className="project-myself">
                      <div className="title_flex"data-aos="zoom-in-down" >
                      <h1 style={{font:'35px'}}><span>Kickstart</span></h1>  
                       <p>Secured x rank in google Kickstart</p>
                        </div>
                     
                  </div>
                  
                  
                  
                  </div>
                   
                  <div className="project-us-detail">
                  
                 
                  <div className="image" >
                      <img src="/images/leetcode.jpg" alt="a" data-aos="fade-right"></img>
                  
                      </div>
                    
                
                
              
                  <div className="project-myself">
                      <div className="title_flex"data-aos="zoom-in-down" >
                      <h1 style={{font:'35px'}}><span>Leetcode</span></h1>
                      
                       <p>Solve more than 300+problem on leetcode </p>
                       <p>solved around 1000+problem on various codeingp platform</p>
                        </div>
                     
                  </div>
                  
                  
                  
                  </div>
                  
                    
                
                
              
                 
                
                
              
                  
                  
                  
                     
                      
                  
    
                  
                </div>
        </section>    
         
    )
}
export default Achieve;