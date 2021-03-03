import React, { Component } from 'react'
import MyWork from './MyWork'

export class Home extends Component {
    render() {
        return (
            <div>
               <div className="main" >
               <div className="nav">
               <ul>
               <li href="#aboutme">About Me </li>
               <li href="#myprojects">My Projects </li>
               <li href="#myskills">My Skills </li>
               </ul>
               <div></div></div>

               <section id="aboutme">
               <div style={{padding:'30px'}}>
               <h1>About me</h1>
               </div>
               <div className="row" style={{padding:'20px'}}>
               <div className="col-lg-4 col-md-2 h-100" style={{paddingTop:'50px'}}>
               My name is Diana Ndinda Nyamai.i am a dedicated and motivated software developer
i am experienced in frontend developer and i have worked with the company Fundis as an intern.
The languages and technologies i am good at include javascript,java,python,react. i love technology and always ready to learn something new.
               </div>
               <div className="col-lg-6 col-md-6" style={{paddingLeft:'200px'}}>
               <div className="profile">  <img className="img-fluid" src="./Images/profile.png" alt="profilepic"/></div>
             
               </div>
               </div>
               </section>
               <hr/>
               <MyWork/>
               </div>
            </div>
        )
    }
}

export default Home
