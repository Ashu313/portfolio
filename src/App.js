
import React from 'react';
import './App.css';
import Navbar from './navbar';

import Home from './Home/home';
import {
    BrowserRouter as Router,
  } from 'react-router-dom'

function App() {
return(
    <>
<React.Fragment>
    <Router>
<Navbar></Navbar>

</Router>
{/*
<AnchorLink href='#About' element={<About/>}/>
<AnchorLink href='#Skill' element={<Skill/>}/>
<AnchorLink href='#Tech'  element={<Tech/>}/>
<AnchorLink href='#Project' element={<Project/>}/>
<AnchorLink href='#Achieve' element={<Achieve/>}/>
<AnchorLink href='#Contact' element={<Contact/>}/>
<AnchorLink href='#Footer' element={<Footer/>}/>
*/}


<Home></Home>


</React.Fragment>


{/*<About></About>

<Skill></Skill>
<Tech></Tech>


<Footer></Footer>
*/}
</>
)
 
}

export default App;
