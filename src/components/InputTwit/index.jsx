import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import styles from './index.module.scss'

const InputTwit = ({ profile, onTweet }) => {
  // const [ textarea, setTextarea ] = useState('')

  const Editor = ({}) => {
    const [ textList, setTextList ] = useState([ '' ])

    const onEnter = (e, index) => {
      if (e.key === 'Backspace' && textList[index] === '') {
        e.preventDefault()
        e.stopPropagation()

        const tempList = textList.slice()
        tempList.splice(index, 1)
        setTextList(tempList)

        return
      }

      if (e.key === 'Enter' && e.shiftKey) {
        // e.preventDefault = 이벤트를 무시하겠다. = 실제로 텍스트에 적용하지 않겠다
        e.preventDefault()
        // e.stopPropagation = 이벤트 전파를 중지하겠다. = 상위의 이벤트에 이벤트전달을 하지 않겠다.
        e.stopPropagation()

        // console.log('개행!')
        const tempList = textList.slice()
        tempList.push('')
        setTextList(tempList)

        return
      }

      const tempList = textList.slice()
      tempList[index] = e.target.innerText
      setTextList(tempList)
      // textList.slice() <- 배열이 복사됨

      // e = keyCode
      // const code = e.keyCode // keyCode
      // console.log('In decimal ' + e.keyCode) // keyCode = 10

      // const hex = code.toString(16)
      // console.log('In hex ' + hex) // 0x00 = 16진수
    }

    return (
      <div className={styles.editorWrapper}>
        {/* onKeyDown = 눌렀을 때 최초 1회 */}
        {textList.map((text, index) => (
          <div
            key={index}
            value={text}
            contentEditable='true'
            className={styles.editor}
            onKeyDown={(e) => {
              onEnter(e, index)
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.default}>
      <div className={styles.profile}>
        <img src={profile} alt='profile' />
      </div>

      <div className={styles.textBox}>
        <div className={styles.inputBox}>
          {/* <textarea
            value={textarea}
            onChange={(e) => {
              setTextarea(e.currentTarget.value)
            }}
            className={styles.textarea}
            placeholder='무슨 일이 일어나고 있나요?'
          /> */}
          <Editor />
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
            <Button
              onClick={() => {
                onTweet(textList.toString())
              }}
              type='button'
              className={styles.twitButton}
            >
              트윗
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

InputTwit.defaultProps = {
  profile: null,
  onTweet: null
}

InputTwit.propTypes = {
  profile: PropTypes.string,
  onTweet: PropTypes.func
}

export default InputTwit
