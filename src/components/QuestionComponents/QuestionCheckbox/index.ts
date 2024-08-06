/**
 * @description 问卷 checkbox
 */

import StatComponent from '../QuestionRadio/StatComponent'
import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多选',
  type: 'questionCheckbox', // 要和后端统一好
  Component,
  PropComponent,
  StatComponent,
  defaultProps: QuestionCheckboxDefaultProps,
}
