import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Header = ({ title }) => {
  return <div className={styles.header}>{title}</div>
}

Header.defaultProps = {
  title: ''
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
