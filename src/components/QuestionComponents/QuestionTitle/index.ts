/**
 * @description 问卷 输入框
 * @author 信封老师
 */

import Component from './Component'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionInput',
  Component,
  defaultProps: QuestionTitleDefaultProps,
}
