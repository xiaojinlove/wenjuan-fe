/**
 * @description 问卷 输入框
 * @author 信封老师
 */

import PropComponent from '../QuestionInput/PropComponent'
import Component from './Component'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '标题',
  type: 'questionTitle',
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}
