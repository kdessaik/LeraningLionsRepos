import {React,useEffect} from 'react'
import '../style/css/Volunteer.css'
import VolunteerBckImg from '../style/images/backgroundImages/volunteerImage.jpg'


export default function Volunteer() {
    useEffect(()=>{
        document.title="Volunteer - Learning Lions"
      },[])
  return (
    <section className='container volunteerSection' >
    <div className='backgroundVolunteer'>
      <img src={VolunteerBckImg} className='bckImgVolunteer' alt='loading...'/>
      
      <h2 className='pacifico-regular'>gain a lifetime experience</h2>
      <h1>Volunteer remotely or on-site</h1>

    </div>


  </section>
  )
}
