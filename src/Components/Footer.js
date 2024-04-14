import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/css/Footer.css'
import fIcon from '../style/images/scialMediIcon/1.png'
import iIcon from '../style/images/scialMediIcon/222.png'
import XIcon from '../style/images/scialMediIcon/3.png'
import YIcon from '../style/images/scialMediIcon/4.png'
import LIcon from '../style/images/scialMediIcon/5.png'



export default function Footer() {
  return (
    
<>
<footer className='footer' >
  <section className='footerEmail'>
    <form> <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
    <input placeholder='Your@email.com'/>
    <button>SUBSCRIBE</button>
    </form>
   

  </section>
  
  <div className="container ">

    
    


     
    <section className="contactFooter">
        <h5 >CONTACT US</h5>
        <a>info@learninglions.org</a>
        <address>Kenya – P.O. Box 344 – 30500 Lodwar</address>
        <address>Germany – Schlossstraße 8, 82269 Geltendorf</address>

      
    </section>
     


    
    <section className="contactFooter">
    <h5 >FOLLOW US</h5>
      <div className='socialMedia'>
      <i className="bi bi-socialMedia"><a target="_blank" href='https://www.facebook.com/learninglionskenya/?_rdc=2&_rdr'>
        <img src={fIcon}/>
        </a> </i>
        <i className="bi bi-socialMedia"><a target="_blank" href='https://www.instagram.com/learning_lions/'>
        <img className='iconSameSize' src={iIcon}/>
        </a> </i>
        <i className="bi bi-socialMedia"><a target="_blank" href='https://twitter.com/learning_lions'>
        <img className='iconSameSize' src={XIcon}/>
        </a> </i>
        <i className="bi bi-socialMedia"><a target="_blank" href='https://www.youtube.com/channel/UCtdMZg2Dh6kwyyqgqqwrX0Q'>
        <img className='iconSameSize' src={YIcon}/>
        </a> </i>
        <i className="bi bi-socialMedia"><a target="_blank" href='https://www.linkedin.com/company/startuplions?originalSubdomain=ke'>
        <img src={LIcon}/>
        </a> </i>
        
      </div>
      
    </section>
    


      
    <section >
            
      <div className="row">
  
       
  

  
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
         <br/>

          <ul className="list-unstyled mb-0">
            <li className='Policy'>
              <a href="#!" className="text-white1">imprint</a>
            </li>
            <li className='Policy'>
              <a href="#!" className="text-white1">privacy</a>
            </li>
           
          </ul>
        </div>
  

     

  
       
  
      </div>

     
    </section>
      

  </div>
  <section className='footerDescription'>
    <p>
    Learning Lions is the first step of a youth empowering program preceding

    </p>
   <span>
   <a href=''>www.digitallions.co </a> 
    <a href=''>and www.startuplions.org</a>
    </span> 
  </section>
  

 
 

</footer>
</>




  )
}
