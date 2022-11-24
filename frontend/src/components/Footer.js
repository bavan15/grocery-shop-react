import React from 'react';
import css from './css/Nav.css';

const Footer = () => {
  return (
    <div className="bg-light footer">
     <br/>
    <div className="container" style={{color:"black"}}>
    <div className="row">
      <div className="col">
      <h3 >Information</h3>
      <a href="/" style={{color:"white"}}>Contact us</a><br/>
      <a href="/" style={{color:"white"}}>About Us</a><br/>
      
      </div>
      
      <div className="col">
      <h3 >Contact</h3>
      
      <a href="/" style={{color:"white"}}>Email : bavanpt.19msc@kongu.edu</a><br/>
      <a href="/" style={{color:"white"}}>Send Your Feedback</a><br/>
      </div>
    </div>
    <br/>
      <div className="row">
      <div className="col">
     
      </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default Footer;