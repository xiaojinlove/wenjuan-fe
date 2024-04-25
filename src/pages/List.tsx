import React, { FC, useState } from 'react'
import styles from './List.module.scss'
import QuestionCard from '../components/QuestionCard'

const rawQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createAt: '3月11日 13:23',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: false,
    answerCount: 7,
    createAt: '4月10日 13:23',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: true,
    answerCount: 10,
    createAt: '3月12日 13:23',
  },
]
const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <p>List</p>
    </>
  )
}

export default List
