
import React from 'react';
import './App.css';
import Navbar from './navbar';
import Contact from './contact/contact';
import Skill from './skills/skills';
import About from './Aboutus/about';
import AllProject from './project/projectall';
import Achieve from './achievement/achievementData';
import Tech from './technology/tech';
import Sticky from './sticky/sticky';
import Footer from './footer/footer';

function App() {
return(
    <>
<Navbar></Navbar>
<Skill></Skill>
<Tech></Tech>
<AllProject/>
<Achieve></Achieve>
<Contact></Contact>
<Footer></Footer>


{/*<About></About>

<Skill></Skill>
<Tech></Tech>


<Footer></Footer>
*/}
</>
)
 
}

export default App;
