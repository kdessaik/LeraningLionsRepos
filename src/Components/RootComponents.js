import React from 'react'
import MenuBar  from './MenuBar'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'




export default function RootComponents() {
  return (
    <div>
        <MenuBar/>
        <main>
            <Outlet/>

        </main>
      <Footer/>
      
    </div>
  )
}
