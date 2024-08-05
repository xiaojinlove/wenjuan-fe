import React, { FC } from 'react'
import { Typography } from 'antd'
import PieDemo from './PieDemo'

const { Title } = Typography
type PropsType = {
  selectedComponentId: string
  selectedComponentType: string
}
const ChartStat: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, selectedComponentType } = props
  return (
    <>
      <Title level={3}>图表统计</Title>
      <div>
        <PieDemo />
      </div>
    </>
  )
}

export default ChartStat
