import {React,useEffect} from 'react'
import DonateBckImg from '../style/images/backgroundImages/BackGround-Donate.jpg'
import'../style/css/Donate.css'


export default function Donate() {
  useEffect(()=>{
    document.title="Donate - Learning Lions"
  },[])
  return (
    <section className='container donateSection' >
      <div className='backgroundDonate'>
        <img src={DonateBckImg} className='bckImgDonate' alt='loading...'/>
        
        <h2 className='pacifico-regular'>help us grow</h2>

      </div>


    </section>
  )
}
