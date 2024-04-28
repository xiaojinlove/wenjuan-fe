import React, { FC, useState } from 'react'
import styles from './common.module.scss'
//import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Empty, Typography, Table, Tag, Space, Button, Modal, message } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import ListSearch from '../../components/ListSearch'

const { Title } = Typography
const rawQuestionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createAt: '3月11日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 7,
    createAt: '4月10日 13:23',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: true,
    answerCount: 10,
    createAt: '3月12日 13:23',
  },
]
const tableColumns = [
  {
    title: '标题',
    dataIndex: 'title',
    //key: 'title', //循环列的 key ，他会默认取dataIndex的值
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    render: (isPublished: boolean) => {
      return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
    },
  },
  {
    title: '答卷',
    dataIndex: 'answerCount',
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
  },
]
const { confirm } = Modal
const Trash: FC = () => {
  useTitle('小星问卷 - 我的问卷')
  // const [searchParams] = useSearchParams()
  // console.log('keyword', searchParams)
  const [questionList, setQuestionList] = useState(rawQuestionList)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  function del() {
    confirm({
      title: '确认彻底删除该问卷？',
      icon: <ExclamationCircleFilled />,
      content: '删除以后不可以找回',
      onOk: () => message.success(`删除 ${JSON.stringify(selectedIds)}`),
    })
  }
  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectedIds(selectedRowKeys as string[])
          },
        }}
      />
    </>
  )
  return (
    <>
      {/* 上 */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
          {JSON.stringify(selectedIds)}
        </div>
      </div>
      {/* 中 */}
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElem}
      </div>
      {/* 下 */}
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Trash
