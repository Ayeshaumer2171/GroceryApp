import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function End() {
  const endStyle = {
    backgroundColor: '#4CAF50', 
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    width: '100%', 
    };

    const arrowStyle = {
      fontSize: '40px',
      textDecoration: 'none',
      color: '#ffffff',
       display: 'block',
       marginLeft: 'auto', 
       };


  return (
    <div style={endStyle}>
      <h4>Copyright © 2021 Frontend Bootcamp</h4>
      <a href="#" className='arrow' style={arrowStyle}>
      <FaArrowAltCircleUp />
        </a>
    </div>
  );
}
