import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
import styles from './Home.module.scss'

//import '../_mock'
import axios from 'axios'

const { Title, Paragraph } = Typography
const Home: FC = () => {
  useEffect(() => {
    // fetch('/api/test')
    //   .then(res => console.log(res.json()))
    //   .then(data => console.log('fetch data', data))
    axios.get('/api/test').then(res => console.log('axios res', res.data))
  }, [])
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
