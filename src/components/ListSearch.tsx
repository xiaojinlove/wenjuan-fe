import React, { FC, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Input } from 'antd'

const { Search } = Input

const ListSearch: FC = () => {
  const [value, setValue] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  function handleSearch(value: string) {
    console.log('value', value)
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
