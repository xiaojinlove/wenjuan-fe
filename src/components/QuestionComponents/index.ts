import type { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput/index'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle/index'
import QuestionParagraphConf, { QuestionParagraphPropsType } from './QuestionParagraph/index'
//各个组件的 props type
export type ComponentPropsType = QuestionTitlePropsType &
  QuestionInputPropsType &
  QuestionParagraphPropsType

//组件的配置
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

//全部组件配置的列表
const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf,
  QuestionParagraphConf,
]
//组件分组
export const componentConfGroup = [
  {
    groupId: 'text',
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionParagraphConf],
  },
  {
    groupId: 'input',
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
]
export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
