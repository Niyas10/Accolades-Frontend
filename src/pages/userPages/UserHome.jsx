import React from 'react'
import Navbar from '../../components/userComponents/navbar/Navbar'
import LandingText from '../../components/userComponents/landingText/LandingText'
import SeoProcessSection from '../../components/userComponents/seoProcessSection/SeoProcessSection'
import Onpage from '../../components/userComponents/onPageSeo/Onpage'
import Footer from '../../components/userComponents/footer/Footer'
import './UserHome.css'

function UserHome() {
  return (
    <>
        <Navbar/>
        <LandingText/>
        <SeoProcessSection/>
        <Onpage/>
        <Footer/>
    </>

  )
}

export default UserHome