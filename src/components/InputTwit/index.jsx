import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const InputTwit = ({ profile }) => {
  return (
    <div className={styles.default}>
      <div className={styles.profile}>
        <img src={profile} alt='profile' />
      </div>

      <div className={styles.textBox}>
        <div className={styles.inputBox}>
          <textarea className={styles.textarea} />
        </div>

        <div className={styles.optionals}>
          <div className={styles.leftArea}>
            <img alt='image' />
            <img alt='gif' />
            <img alt='vote' />
            <img alt='emoji' />
          </div>
          <div className={styles.rightArea}>
            <div className={styles.typoOptions}>
              <div className={styles.gaugeArea} />
              <div className={styles.scaleUp} />
            </div>
            <button type='button' className={styles.twitButton}>
              트윗
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

InputTwit.defaultProps = {
  profile: null
}

InputTwit.propTypes = {
  profile: PropTypes.string
}

export default InputTwit
