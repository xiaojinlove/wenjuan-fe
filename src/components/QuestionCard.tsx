import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id } = props
  return (
    <>
      <p>QuestionCard {_id}</p>
    </>
  )
}

export default QuestionCard
