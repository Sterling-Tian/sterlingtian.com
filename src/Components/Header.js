import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery'
import art from "../img/profilepic.png";
import doge from "../img/doge.png";

import mke from "../img/mke.png";
import robot from "../img/robot.png";
import sn from "../img/sn.png";


import ccc from "../img/ccc.png";
import eats from "../img/eats.png";
import policy from "../img/policy.png";
import snHeader from "../img/snHeader.png";


const images = [
   {
      
      original: doge
   },
   {
      
      original: mke
   },
   {
      
      original: robot
   },
   {
      
      original: sn
   }
]

class Header extends Component {
   
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      {/* <ParticlesBg type="circle" bg={true} /> */}
     
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
         </ul>
      </nav>
      
      <div className="row banner">
         <br/><br/>
      <ImageGallery showThumbnails={false} showGalleryPlayButton ={false} showPlayButton = {false} showGalleryFullscreenButton = {false} items={images} isRTL = {true}/>
         <div className="banner-text">
            <h1 className="responsive-headline" >{name}</h1>
            <h3>{description}!</h3>
            <hr />
            <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
            
         </div>
        
      </div>

      {/* <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> */}

   </header>
    );
  }
}

export default Header;
