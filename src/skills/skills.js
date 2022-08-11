import React from "react";

import {Bar}from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Skill=()=>{

    var  data= {
        labels:['DSA', 'HTML', 'CSS', 'MONGODB', 'JAVASCRIPT', 'REACT','NODEJS'],
        datasets: [{
            label: 'skills out of 20',
            data: [17,13,13,12,15,13,11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        
        }]
    }
   var options={
    maintainAspectRatio:false,
    animation: false,
        scales: {
            x:{
                ticks:{
                    color:'white'
                },
            },
            y: {
                ticks:{
                    color:'white'
                },
                beginAtZero: true
            }
        },
        legend:{

        
        labels: {
            // This more specific font property overrides the global property
            font: {
                size: 14
            },
           
        }
    }
       
    }
    return(
       
        <section>
             <h1 class="heading">
            <span>S</span>
            <span>K</span>
            <span>I</span>
            <span>I</span>
         
            <span>L</span>
           
            <span>S</span>

        </h1>
        <div className=" chart">
   
      <Bar
        data={data}
    height={400}
        options={options}
      />
  
      </div>
      </section>


     
    )
}
export default Skill;