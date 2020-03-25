import React from 'react'

// prop-types : 컴포넌트간 props를 전달할 때 값이 제대로 넘어오는지 확인시켜주는 모듈
import PropTypes from 'prop-types'

const Button = ({ onClick, text }) => {
  return (
    <button type='button' onClick={onClick}>
      {text}
    </button>
  )
}

// default Props
// 기본값
// 상위 React Component에서 데이터를 내려주지 않는다면 기본값으로 이 값들을 주겠다.
Button.defaultProps = {
  onClick: () => {},
  text: ''
}

// propTypes
// 자료형
// 지정을 해주면 그 외에 타입이 들어올 때 에러를 체크해준다.
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string
}

export default Button
