import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import { Result, Spin, Button } from 'antd'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'
import styles from './index.module.scss'
import StatHeader from './StatHeader'

const Stat: FC = () => {
  const { loading } = useLoadQuestionData()
  const { title, isPublished } = useGetPageInfo()
  const nav = useNavigate()

  useTitle(`问卷统计 - ${title}`)

  // loading 效果
  const LoadingELem = (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <Spin />
    </div>
  )
  // Content Elem
  function genContentElem() {
    if (typeof isPublished === 'boolean' && !isPublished) {
      return (
        <div style={{ flex: '1' }}>
          <Result
            status="warning"
            title="该页面尚未发布"
            extra={
              <Button type="primary" onClick={() => nav(-1)}>
                返回
              </Button>
            }
          ></Result>
        </div>
      )
    }

    return (
      <>
        <div className={styles.left}></div>
        <div className={styles.main}></div>
        <div className={styles.right}></div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <StatHeader />
      <div className={styles['content-wrapper']}>
        {loading && LoadingELem}
        {!loading && <div className={styles.content}>{genContentElem()}</div>}
      </div>
    </div>
  )
}

export default Stat
