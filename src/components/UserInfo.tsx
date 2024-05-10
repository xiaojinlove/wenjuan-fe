import { useRequest } from 'ahooks'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserInfoService } from '../services/user'
import { UserOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { LOGIN_PATHNAME } from '../router'
import { removeToken } from '../utils/user-token'

const UserInfo: FC = () => {
  const navigate = useNavigate()
  const { data } = useRequest(getUserInfoService)
  const { username, nickname } = data || {}
  function handleLogout() {
    removeToken()
    message.success('退出成功')
    navigate(LOGIN_PATHNAME)
  }
  const UserInfo = (
    <>
      <span style={{ color: 'white' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={handleLogout}>
        退出
      </Button>
    </>
  )
  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>
  return <div>{username ? UserInfo : Login}</div>
}

export default UserInfo
