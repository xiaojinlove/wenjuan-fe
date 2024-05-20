/**
 * @description 问卷 - 段落
 */

import PropComponent from '../QuestionInput/PropComponent'
import Component from './Component'
import { QuestionParagraphDefaultProps } from './interface'

export * from './interface'

export default {
  title: '段落',
  type: 'questionParagraph',
  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps,
}
