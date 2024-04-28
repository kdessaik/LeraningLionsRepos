import {React,useEffect} from 'react'
import '../style/css/Contact.css'
import ContactImg from '../style/images/backgroundImages/contactbckImg.png'


export default function Contact() {
    useEffect(()=>{
        document.title="Contact - Learning Lions"
      },[])
  return (
    <section className='container contactSection' >
    <div className='backgroundContact'>
      <img src={ContactImg} className='bckImgContact' alt='loading...'/>
      
      <h2 className='pacifico-regular'>contact us</h2>

    </div>


  </section>
  )
}
