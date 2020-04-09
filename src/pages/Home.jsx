import React, { useEffect } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import InputTwit from '../components/InputTwit'
import TweetList from '../components/TweetList'

import RightSidebar from '../components/RightSidebar'

import './home.css'

const Home = () => {
  const http = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000
  })

  const getTimeline = () => {
    http.get('/users/1/timeline').then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    getTimeline()
  }, [])

  return (
    <div className='home'>
      <main className='main'>
        <Header title='홈' />
        <InputTwit profile='' />
        <TweetList
          list={[
            {
              profile:
                'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfs7.tistory.com%2Fupload_control%2Fdownload.blog%3Ffhandle%3DYmxvZzIzMDc5NUBmczcudGlzdG9yeS5jb206L2F0dGFjaC8xMy8xMzAwMDAwMDEzMzkuanBn',
              name: '수퍼맨',
              id: '@super',
              date: '3월 28일',
              description:
                '나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.',
              likeCount: 10
            },
            {
              profile: 'https://image.aladin.co.kr/product/6960/40/cover500/g072438442_1.jpg',
              name: '베트맨',
              id: '@bet',
              date: '3월 26일',
              description:
                '나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다',
              likeCount: 222
            },
            {
              profile:
                'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfs7.tistory.com%2Fupload_control%2Fdownload.blog%3Ffhandle%3DYmxvZzIzMDc5NUBmczcudGlzdG9yeS5jb206L2F0dGFjaC8xMy8xMzAwMDAwMDEzMzkuanBn',
              name: '수퍼맨',
              id: '@super',
              date: '3월 28일',
              description:
                '나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.',
              likeCount: 10
            },
            {
              profile: 'https://image.aladin.co.kr/product/6960/40/cover500/g072438442_1.jpg',
              name: '베트맨',
              id: '@bet',
              date: '3월 26일',
              description:
                '나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다',
              likeCount: 222
            },
            {
              profile:
                'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfs7.tistory.com%2Fupload_control%2Fdownload.blog%3Ffhandle%3DYmxvZzIzMDc5NUBmczcudGlzdG9yeS5jb206L2F0dGFjaC8xMy8xMzAwMDAwMDEzMzkuanBn',
              name: '수퍼맨',
              id: '@super',
              date: '3월 28일',
              description:
                '나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.',
              likeCount: 10
            },
            {
              profile: 'https://image.aladin.co.kr/product/6960/40/cover500/g072438442_1.jpg',
              name: '베트맨',
              id: '@bet',
              date: '3월 26일',
              description:
                '나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다',
              likeCount: 222
            },
            {
              profile:
                'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfs7.tistory.com%2Fupload_control%2Fdownload.blog%3Ffhandle%3DYmxvZzIzMDc5NUBmczcudGlzdG9yeS5jb206L2F0dGFjaC8xMy8xMzAwMDAwMDEzMzkuanBn',
              name: '수퍼맨',
              id: '@super',
              date: '3월 28일',
              description:
                '나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.나는 수퍼맨이다.',
              likeCount: 10
            },
            {
              profile: 'https://image.aladin.co.kr/product/6960/40/cover500/g072438442_1.jpg',
              name: '베트맨',
              id: '@bet',
              date: '3월 26일',
              description:
                '나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다나는 배트맨이다',
              likeCount: 222
            }
          ]}
        />
      </main>
      <RightSidebar />
    </div>
  )
}

export default Home
