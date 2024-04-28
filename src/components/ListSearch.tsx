import React, { FC, useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Input } from 'antd'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ListSearch: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [value, setValue] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  //获取 url 参数，并设置到 input value
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])

  function handleSearch(value: string) {
    //跳转页面 增加 url 参数
    // console.log('value', value)
    // navigate(`${pathname}?keyword=${value}`)
    navigate({
      pathname: pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      onSearch={handleSearch}
      value={value}
      onChange={handleChange}
      style={{ width: '260px' }}
    />
  )
}

export default ListSearch
