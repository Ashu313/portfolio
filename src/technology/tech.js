import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./tech.css";




const Tech=()=>{


    const settings = {
      className: "center",
      autoplay:"true",
      autoplaySpeed: 1000,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (

<>
        <section className='contact-form'>
        <h1 class="heading">
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>I</span>
            <span>L</span>
            <span>S</span>
          


        </h1>
        </section>
      <div  className="boo">
       
        <Slider {...settings}>
          <div>
            <h3><i class="fa-solid fa-c" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>C</h1>
          </div>
          <div>
            <h3><span class="iconify" data-icon="file-icons:c" style={{ fontSize:"40px",color:"orange"}}></span>
             </h3>
             <h1>C++</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-js" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>JS</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-node" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>Node-JS</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-html5" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>Html5</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-css3" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>Css3</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-react" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>React</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-github" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>Git</h1>
          </div>
          <div>
            <h3><span class="iconify" data-icon="logos:mysql" style={{ fontSize:"40px",color:"orange"}}></span></h3>
            <h1>MySql</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-npm" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>npm</h1>
          </div>
          <div>
            <h3><i class="fa-brands fa-bootstrap" style={{ fontSize:"40px",color:"orange"}}></i></h3>
            <h1>Bootstrap</h1>
          </div>
        
          <div>
            <h3><span class="iconify" data-icon="simple-icons:mongodb" style={{ fontSize:"40px",color:"orange"}}></span></h3>
            <h1>Mongodb</h1>
          </div>
          <div>
            <h3><span class="iconify" data-icon="vscode-icons:file-type-vscode" style={{ fontSize:"40px",color:"orange"}}></span></h3>
            <h1>Vscode</h1>
          </div>
          <div>
            <h3><span class="iconify" data-icon="file-icons:microsoft-word"style={{ fontSize:"40px",color:"orange"}}></span></h3>
            <h1>Msword</h1>
          </div>
          <div>
            <h3><span class="iconify" data-icon="vscode-icons:file-type-vscode" style={{ fontSize:"40px",color:"orange"}}></span></h3>
            <h1>Vscode</h1>
          </div>
          <div>
            <h3><span class="iconify" data-icon="file-icons:microsoft-word"style={{ fontSize:"40px",color:"orange"}}></span></h3>
            <h1>Msword</h1>
          </div>
    
        
        </Slider>
      </div>
      </>
    );
  }

  export default Tech;
