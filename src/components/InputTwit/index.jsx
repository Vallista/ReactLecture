import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import styles from './index.module.scss'

const InputTwit = ({ profile }) => {
  return (
    <div className={styles.default}>
      <div className={styles.profile}>
        <img src={profile} alt='profile' />
      </div>

      <div className={styles.textBox}>
        <div className={styles.inputBox}>
          <textarea className={styles.textarea} placeholder='무슨 일이 일어나고 있나요?' />
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
            <Button type='button' className={styles.twitButton}>
              트윗
            </Button>
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
