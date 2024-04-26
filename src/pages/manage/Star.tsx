import React, { FC, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
//import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Empty, Typography } from 'antd'

const { Title } = Typography
const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createAt: '3月11日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 7,
    createAt: '4月10日 13:23',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: true,
    answerCount: 10,
    createAt: '3月12日 13:23',
  },
]
const Star: FC = () => {
  useTitle('小星问卷 - 我的问卷')
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams)
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      {/* 上 */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>（搜索）</div>
      </div>
      {/* 中 */}
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map(item => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>
      {/* 下 */}
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
