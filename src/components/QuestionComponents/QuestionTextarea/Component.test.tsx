import { render, screen } from '@testing-library/react'
import React from 'react'

import Component from './Component'

test('默认属性', () => {
  render(<Component />)
  const h = screen.getByText('输入框标题')
  expect(h).toBeInTheDocument()

  const textarea = screen.getByPlaceholderText('请输入...')
  expect(textarea).toBeInTheDocument()
})

test('传入属性', () => {
  render(<Component title="hello" placeholder="world" />)

  const p = screen.getByText('hello')
  expect(p).toBeInTheDocument()

  const textarea = screen.getByPlaceholderText('world')
  expect(textarea).toBeInTheDocument()
})
