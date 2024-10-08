
import Image from "next/image";
import back from "../About/back.jpg"




export default function Aboutpage(){
    return(

        <div>
        <div className="mainbox">
          <h1>IT Courses</h1>
          <ul>
            <li>
              <a href="#">Home</a></li>
             <li> <a href="About">About</a></li>
              <li><a href="services">Services</a></li>
              <li><a href="contact">Contact</a></li>
           
          </ul>
    
        </div>
       
        <div className="structure">
      <div className="figer">  
        <div className="container">
      
        <div className="box shadow1">NEXT JS</div>
        <div className="box shadow2">HTML</div>
        <div className="box shadow3">CSS</div>
        <div className="box shadow4">TYPESCRIPT</div>
     
        
    </div></div></div>
    <div className="mainbox">
      <h1>Thank YOU !</h1>
  
    </div>

    </div>

       
       
   
        
    )
}