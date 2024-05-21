import React, { FC } from 'react'
import { Space, Button, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'

import useGetPageInfo from '../../../hooks/useGetPageInfo'
import styles from './StatHeader.module.scss'

const { Title } = Typography

const StatHeader: FC = () => {
  const nav = useNavigate()
  const { id } = useParams()

  const { title, isPublished } = useGetPageInfo()

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title>{title}</Title>
          </Space>
        </div>
        <div className={styles.main}>main</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => nav(`/question/edit/${id}`)}>
            编辑问卷
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StatHeader
