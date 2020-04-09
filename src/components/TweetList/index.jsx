import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const TweetList = ({ list }) => {
  const Tweet = ({ profile, name, id, description, date, likeCount }) => (
    <div className={styles.tweet}>
      <div className={styles.profile}>
        <img src={profile} alt='profile' />
      </div>
      <div className={styles.contents}>
        <div className={styles.header}>
          <span>{name}</span>
          <span>{id}</span>
          <span>{date}</span>
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

  return <div className={styles.tweetList}>{list.map((tweet) => <Tweet {...tweet} />)}</div>
}

TweetList.defaultProps = {
  list: []
}

TweetList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

export default TweetList
