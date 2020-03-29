import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Button = ({ children, type = 'button', onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
