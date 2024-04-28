import {React,useEffect} from 'react'
import '../style/css/Become.css'
import BecomeImg from '../style/images/backgroundImages/BecomeBck.png'


export default function Become() {
    useEffect(()=>{
        document.title="Become-a-lion - Learning Lions"
      },[])
  return (
    <section className='container becomeSection' >
    <div className='backgroundBecome'>
      <img src={BecomeImg} className='bckImgBecome' alt='loading...'/>
      
      <h2 className='pacifico-regular'>become a lion</h2>

    </div>


  </section>
  )
}
