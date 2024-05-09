import React, { FC } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
//import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Empty, Spin, Typography } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const { Title } = Typography

const Star: FC = () => {
  useTitle('小星问卷 - 我的问卷')
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams)
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total } = data
  return (
    <>
      {/* 上 */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      {/* 中 */}
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {/* 问卷列表 */}
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 &&
          list.map((item: any) => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>
      {/* 下 */}
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
