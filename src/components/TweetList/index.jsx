import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const TweetList = ({ list }) => {
  const TweetOptionWindow = ({}) => (
    <div className={styles.optionWindow}>
      <ul className={styles.optionWindowList}>
        <li className={styles.optionWindowListItem}>
          <img />
          <span>삭제</span>
        </li>
        <li className={styles.optionWindowListItem}>
          <img />
          <span>내 프로필 메인에 올리기</span>
        </li>
        <li className={styles.optionWindowListItem}>
          <img />
          <span>트윗 담아가기</span>
        </li>
        <li className={styles.optionWindowListItem}>
          <img />
          <span>트윗 활동 보기</span>
        </li>
      </ul>
    </div>
  )

  const Tweet = ({ profile, name, id, description, date, likeCount }) => {
    const [ isOptionOpen, setOptionOpen ] = useState(false)

    // onFocus, onBlur
    // onFocus: 이 친구가 선택이 되었을때,
    // onBlur: 이 친구의 선택이 풀렸을때
    return (
      <div
        className={styles.tweet}
        onBlur={() => {
          setOptionOpen(false)
        }}
      >
        <div className={styles.profile}>
          <img src={profile} alt='profile' />
        </div>
        <div className={styles.contents}>
          <div className={styles.header}>
            <div>
              <span>{name}</span>
              <span>{id}</span>
              <span>{date}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  setOptionOpen(!isOptionOpen)
                }}
                type='button'
              >
                버튼
              </button>
              {isOptionOpen && <TweetOptionWindow />}
            </div>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.footer}>
            <img src={null} alt='profile' />
            <img src={null} alt='profile' />
            <img src={null} alt='profile' />
            <img src={null} alt='profile' />
            <img src={null} alt='profile' />
          </div>
        </div>
      </div>
    )
  }

  return <div className={styles.tweetList}>{list.map((tweet) => <Tweet {...tweet} />)}</div>
}

TweetList.defaultProps = {
  list: []
}

TweetList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

export default TweetList
