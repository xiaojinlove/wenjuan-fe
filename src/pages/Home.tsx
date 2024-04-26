import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home: FC = () => {
  const navigate = useNavigate()
  function handleLogin() {
    // navigate('/login?b=20')
    navigate({
      pathname: '/login',
      search: 'b=21',
    })
  }
  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={handleLogin}>登录</button>
        <Link to="register?a=10">注册</Link>
      </div>
    </div>
  )
}

export default Home
