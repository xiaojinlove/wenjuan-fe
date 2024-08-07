/**
 * 问卷 - radio
 */

import PropComponent from './PropComponent'
import Component from './Component'
import { QuestionRadioDefaultProps } from './interface'
import StatComponent from './StatComponent'

export * from './interface'

export default {
  title: '单选',
  type: 'questionRadio',
  Component,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
  StatComponent,
}
