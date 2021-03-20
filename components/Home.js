import React from 'react'
import step from '../images/step.png'
import goals from '../images/goals.png'
import "./home.css"


function Home() {

    return(
        <div className="home-wrap">
            <div>
                <div className="home-text-wrap">
                    <div className="top-line">Start a new life</div>
                    <h1  className="heading">Habit app name</h1>
                    <p classname="subtitle">With habits you can have a more organized lifestyle is really simple
                    start by entering your habits bellow</p>     
                </div>
                <div className="home-imgwrap">
                            <img src={goals} className="goals-img"></img>
                 </div>
                
            </div>
            

            
                      
                
                <div className="home-imgwrap2">
                
                    <img src={step} className="step-img"></img>
                

                </div>

              
            
             
           
           
        </div>
    )
}

export default Home;
