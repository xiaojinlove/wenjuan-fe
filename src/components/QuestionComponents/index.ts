import type { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput/index'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle/index'

//各个组件的 props type
export type ComponentPropsType = QuestionTitlePropsType & QuestionInputPropsType

//组件的配置
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

//全部组件配置的列表
const componentConfList: ComponentConfType[] = [QuestionTitleConf, QuestionInputConf]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
