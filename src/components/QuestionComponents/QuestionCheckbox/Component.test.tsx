import { render, screen } from '@testing-library/react'
import React from 'react'

import Component from './Component'

test('默认属性', () => {
  render(<Component />)
  const p = screen.getByText('多选标题')
  expect(p).toBeInTheDocument()

  for (let i = 1; i <= 3; i++) {
    const checkbox = screen.getByDisplayValue(`item${i}`)
    expect(checkbox).toBeInTheDocument()
    const label = screen.getByText(`选项${i}`)
    expect(label).toBeInTheDocument()

    expect(checkbox.getAttribute('checked')).toBeNull()
  }
})

test('传入属性', () => {
  const list = [
    { value: 'v1', text: 't1', checked: false },
    { value: 'v2', text: 't2', checked: true },
    { value: 'v3', text: 't3', checked: true },
  ]
  const value = 'v1'
  render(<Component title="hello" list={list} />)

  const p = screen.getByText('hello')
  expect(p).toBeInTheDocument()

  const checkbox1 = screen.getByDisplayValue(`v1`)
  expect(checkbox1).toBeInTheDocument()
  expect(checkbox1.getAttribute('checked')).toBeNull()

  const checkbox2 = screen.getByDisplayValue(`v2`)
  expect(checkbox2).toBeInTheDocument()
  expect(checkbox2.getAttribute('checked')).not.toBeNull()

  const checkbox3 = screen.getByDisplayValue(`v3`)
  expect(checkbox3).toBeInTheDocument()
  expect(checkbox3.getAttribute('checked')).not.toBeNull()
})
