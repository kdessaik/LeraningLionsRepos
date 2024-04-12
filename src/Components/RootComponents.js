import React from 'react'
import MenuBar  from './MenuBar'
import {Outlet} from 'react-router-dom'
import '../style/css/MenuBar.css'

export default function RootComponents() {
  return (
    <div>
        <MenuBar/>
        <main>
            <Outlet/>

        </main>
      
    </div>
  )
}
