import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import { Result, Spin, Button } from 'antd'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { useNavigate } from 'react-router-dom'
import { useTitle } from 'ahooks'

const Stat: FC = () => {
  const { loading } = useLoadQuestionData()
  const { title, isPublished } = useGetPageInfo()
  const nav = useNavigate()

  useTitle(`问卷统计 - ${title}`)

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Spin />
      </div>
    )
  }
  if (!isPublished) {
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
    <div>
      <p>Stat page</p>
      {/* {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>} */}
    </div>
  )
}

export default Stat
