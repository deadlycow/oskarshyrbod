import React from 'react'
import './hero.css'
import SearchBar from '../searchbar/SearchBar'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Din egen slogan, loga eller bild!</h1>
      <SearchBar />
    </div>
  )
}

export default Hero
