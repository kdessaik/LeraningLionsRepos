import React from 'react'
import '../style/css/About.css'
import bckImg from '../style/images/backgroundImages/About-page.png'

export default function About() {
  return (
    <section className='container aboutSection' >
      <div className='backgroundAbout'>
        <img src={bckImg} className='bckImgAbout' alt='loading...'/>
        
        <h2>about</h2>

      </div>


    </section>
  )
}
