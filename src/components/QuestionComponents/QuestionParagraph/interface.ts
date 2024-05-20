export type QuestionParagraphPropsType = {
  text?: string
  isCenter?: boolean

  //用于属性组件 PropComponent
  onChange?: (newProps: QuestionParagraphPropsType) => void
  disabled?: boolean
}

export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  text: '一行段落',
  isCenter: false,
}
