import React, { FC, useEffect, useState } from 'react'
import { Typography } from 'antd'
// import PieDemo from './PieDemo'
import { useRequest } from 'ahooks'
// import BarDemo from './BarDemo'
import { getComponentStatService } from '../../../services/stat'
import { useParams } from 'react-router-dom'

const { Title } = Typography
type PropsType = {
  selectedComponentId: string
  selectedComponentType: string
}
const ChartStat: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, selectedComponentType } = props
  const [stat, setStat] = useState([])
  const { id = '' } = useParams()
  const { run } = useRequest(
    async (questionId, componentId) => await getComponentStatService(questionId, componentId),
    {
      manual: true,
      onSuccess(res) {
        setStat(res.stat)
      },
    }
  )

  useEffect(() => {
    if (selectedComponentId) run(id, selectedComponentId)
  }, [id, selectedComponentId])

  function getStatElem() {
    if (!selectedComponentId) return <div>未选中组件</div>
    return <div>{JSON.stringify(stat)}</div>
  }
  return (
    <>
      <Title level={3}>图表统计</Title>
      <div>{getStatElem()}</div>
    </>
  )
}

export default ChartStat
