import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography
const Home: FC = () => {
  const navigate = useNavigate()
  // function handleLogin() {
  //   // navigate('/login?b=20')
  //   navigate({
  //     pathname: '/login',
  //     search: 'b=21',
  //   })
  // }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>已累计创建问卷 100 份, 发布问卷 90份, 收到问卷980份</Paragraph>
        <div>
          <Button type="primary" onClick={() => navigate(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
