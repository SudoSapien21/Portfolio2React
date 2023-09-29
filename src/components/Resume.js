import React from 'react';
import resume from '../assets/pdf/resume.pdf';

function Resume() {
  return (
    <div className="about-resume">
      <h2>Resume Page</h2>
      {   
      
        <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>

      
      
      }  
    
     </div>    
     
     
   
     

   
  );
}

export default Resume;
