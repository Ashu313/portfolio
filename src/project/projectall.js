import React from "react";
import Project_data from "./project_data";
import Project from "./project";




const AllProject=()=>{
   
 
    return(
        <>
        
        <section className='contact-form'>
            <h1 class="heading">
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>


            </h1>
            <div className="all_project_container1">
             
                {
                    Project_data.map((value)=>
                    {
                        return <Project images={value.img} title={value.title} desc={value.desc}/>
                    })
                }
                
           
                </div>
            
            </section>
        </>
    )
}

export default AllProject;