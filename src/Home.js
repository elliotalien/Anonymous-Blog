import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className="w3-content" style={{maxWidth:"1800px"}}>
      <Header />
      <MainContent/>
      <Footer/>
   </div>
  )
}

export default Home