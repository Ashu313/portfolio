import React from "react";
import "./project.css";

const Project=(props)=>{
    return(

            <div className="project-us-container1">
                <div className="project-us-detail1">
                  
                 
                    <div className="image1">
                        <img src={props.images} alt="a"></img>
                        <div className="project-myself1">
                        <div className="title_flex1">
                        <i class="fa-solid fa-globe"></i>
                        <i class="fa-brands fa-github"></i>
                        </div>
                        <h1>{props.title}</h1>
                        
                          <p>{props.desc}</p>
                          </div>
                       
                    </div>
                      
                       
                 
                   
                   
                  
                </div>
            </div>
         
    )
}
export default Project;