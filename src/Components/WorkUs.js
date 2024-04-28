import {React,useEffect} from 'react'
import '../style/css/WorkUs.css'
import WorkUsBckImg from '../style/images/backgroundImages/work-with-us.jpg'
export default function WorkUs() {
  useEffect(()=>{
    document.title="Work-with-Us - Learning Lions"
  },[])
  return (
    <section className='container workusSection' >
    <div className='backgroundWorkus'>
      <img src={WorkUsBckImg} className='bckImgWorkus' alt='loading...'/>
      
      <h2 className='pacifico-regular'>work with lions</h2>

    </div>


  </section>
  )
}
