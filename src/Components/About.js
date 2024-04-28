import {React,useEffect} from 'react'
import '../style/css/About.css'
import bckImg from '../style/images/backgroundImages/About-page.png'

export default function About() {
  useEffect(()=>{
    document.title="About - Learning Lions"
  },[])
 
  return (
    <section className='container aboutSection' >
      <div className='backgroundAbout'>
        <img src={bckImg} className='bckImgAbout' alt='loading...'/>
        
        <h2 className='pacifico-regular'>about us</h2>

      </div>


    </section>
  )
}
