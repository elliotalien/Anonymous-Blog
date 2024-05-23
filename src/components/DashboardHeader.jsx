import React from 'react'

const DashboardHeader = () => {
  return (
    <header className="w3-container w3-center w3-padding-32">
      <h1><b>POST BLOGS</b></h1>
      <p>Start Post from here... <a style={{textDecoration:"none"}} href="/Anonymous-Blog" className="w3-tag">HOME</a></p>
    </header>
  )
}

export default DashboardHeader