/**
 * @description 问卷 - 段落
 */

import PropComponent from './PropComponent'
import Component from './Component'
import { QuestionTextareaDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多行输入',
  type: 'questionTextarea',
  Component,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps,
}
