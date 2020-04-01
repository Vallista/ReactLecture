import React from 'react'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'

import TwitterBird from './assets/twitter-bird.svg'
import HomeIcon from './assets/home.svg'
import SearchIcon from './assets/search.svg'
import AlarmIcon from './assets/alarm.svg'
import MailIcon from './assets/mail.svg'
import BookMarkIcon from './assets/bookmark.svg'
import ListIcon from './assets/list.svg'
import MoreIcon from './assets/more.svg'

import './app.css'

const App = () => {
  return (
    <div className='app'>
      <Sidebar
        titleImg={TwitterBird}
        list={[
          {
            icon: HomeIcon,
            text: '홈'
          },
          {
            icon: SearchIcon,
            text: '탐색하기'
          },
          {
            icon: AlarmIcon,
            text: '알림'
          },
          {
            icon: MailIcon,
            text: '쪽지'
          },
          {
            icon: BookMarkIcon,
            text: '북마크'
          },
          {
            icon: ListIcon,
            text: '리스트'
          },
          {
            icon: MoreIcon,
            text: '더 보기'
          }
        ]}
      />
      <Home />
    </div>
  )
}

export default App
