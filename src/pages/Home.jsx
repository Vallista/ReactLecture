import React from 'react'

import Header from '../components/Header'
import InputTwit from '../components/InputTwit'

import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <Header title='홈' />
      <InputTwit profile='' />
    </div>
  )
}

export default Home
