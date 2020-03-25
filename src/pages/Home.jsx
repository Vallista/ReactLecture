import React from 'react'

import './home.css'

import Button from '../components/Button'

const Home = () => {
  return (
    <div className='home'>
      홈
      <Button
        text={123}
        onClick={() => {
          console.log('안녕하세요!')
        }}
      />
    </div>
  )
}

export default Home
