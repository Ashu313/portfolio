
import React from "react";
import About from "../Aboutus/about";
//import Skill from "../Skillsus/skills";
import Achieve from "../achievement/achievementData";
import Project from "../project_all/project";
import Tech from "../technology/tech";
import Footer from "../footer/footer";
import Contact from "../contact/contact";
import Skill from "../Skillsus/skills";

const Home=()=>{
    return(
   <>
   <About></About>
   <Skill></Skill>
   <Tech></Tech>
   <Project></Project>
   <Achieve></Achieve>
   <Contact></Contact>
   <Footer></Footer>

   </>


    )
}

export default Home;