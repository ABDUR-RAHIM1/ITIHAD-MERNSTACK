import React from 'react'
import FAQ from '../../Components/FAQ/FAQ' 
import Marque from '../../Components/Marque/Marque'
import Policy from '../../Components/Policy/Policy'
import Slider from '../../Components/Slider/Slider'
import "./Home.css"

function Home() {
  return (
    <div className='Home_container'>
      <Slider/>
      <Marque/>
      <Policy/>
      <FAQ/> 
    </div>
  )
}

export default Home