import React, { FC, useEffect, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
//import { useSearchParams } from 'react-router-dom'
import { useDebounceFn, useTitle } from 'ahooks'
import { Typography, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import { useSearchParams } from 'react-router-dom'

const { Title } = Typography

const List: FC = () => {
  useTitle('小星问卷 - 我的问卷')
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams)

  // const [list, setList] = useState([])
  // const [total, setTotal] = useState(0)
  // useEffect(() => {
  //   async function load() {
  //     const data = await getQuestionList()
  //     const { list = [], total = 0 } = data
  //     setList(list)
  //     setTotal(total)
  //   }
  //   load()
  // }, [])

  const [page, setpage] = useState(1)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const haveMoreData = total > list.length
  // function tryLoadMore() {
  //   console.log('try load more...')
  // }
  const [searchParams] = useSearchParams()
  //触发加载，防抖
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      console.log('try load more...')
    },
    {
      wait: 1000,
    }
  )
  //页面首次加载后和搜索关键词变化的时候会触发
  useEffect(() => {
    tryLoadMore()
  }, [searchParams])
  //当页面滚动时，触发加载
  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener('scroll', tryLoadMore)
    }
    return () => {
      window.removeEventListener('scroll', tryLoadMore)
    }
  }, [searchParams])
  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [], total = 0 } = data
  return (
    <>
      {/* 上 */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
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
        {!loading &&
          list.length > 0 &&
          list.map((item: any) => {
            return <QuestionCard key={item._id} {...item} />
          })}
      </div>
      {/* 下 */}
      <div className={styles.footer}>loadMore...</div>
    </>
  )
}

export default List
