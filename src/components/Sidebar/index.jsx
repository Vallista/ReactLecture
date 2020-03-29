import React from 'react'

// prop types = 상위 앨러먼트에서 하위 앨레먼트로 내릴때 타입이 맞는지 체크하는 모듈
import PropTypes from 'prop-types'

// css module을 사용해서 스타일을 사용하는것.
import styles from './index.module.scss'

import Button from '../Button'

const Sidebar = ({ titleImg, list }) => {
  // list = 안에 카테고리 데이터 정보의 집합 (배열)

  // 사이드바 안에 있는 아이콘, 텍스트 하나의 뭉치
  const createCategory = (icon, text) => (
    <div className={styles.category}>
      <img className={styles.categoryImage} src={icon} alt='categoryIcon' />
      <span className={styles.categoryText}>{text}</span>
    </div>
  )

  const createCategories = (
    <ul className={styles.categories}>
      {list.map((listItem) => <li className={styles.categoryItem}>{createCategory(listItem.icon, listItem.text)}</li>)}
    </ul>
  )

  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.header}>
        <img className={styles.headerImg} src={titleImg} alt='titleIcon' />
      </div>
      {createCategories}
      <Button
        type='button'
        onClick={() => {
          alert('click!')
        }}
      >
        <p>트윗하기</p>
      </Button>
    </div>
  )
}

// defaultProps = 설정해주지 않아도 PropTypes 에서 기본적으로 내려오는 값
Sidebar.defaultProps = {
  titleImg: null,
  list: []
}

// propTypes = 어떤 값이 내려오는지에 대해서
Sidebar.propTypes = {
  titleImg: PropTypes.string,
  // list가 상위에서 주입되는데,
  // PropTypes.arrayOf 얘는 Array(배열)인데, PropTypes.object 배열의 요소로 object 형태를 들고있다.
  list: PropTypes.arrayOf(PropTypes.object)
}

export default Sidebar
