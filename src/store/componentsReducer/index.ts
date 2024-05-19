import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/QuestionComponents'
import { getNextSelectedId } from './utils'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  props: ComponentPropsType
}

export type ComponentsStateType = {
  selectedId: string
  componentList: Array<ComponentInfoType>
}

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
      return action.payload
    },
    changeSelectedId: (state: ComponentsStateType, action: PayloadAction<string>) => {
      state.selectedId = action.payload
    },
    addComponent: (state: ComponentsStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload
      const { selectedId } = state
      const index = state.componentList.findIndex(c => c.fe_id === selectedId)
      if (index < 0) {
        state.componentList.push(newComponent)
      } else {
        state.componentList.splice(index + 1, 0, newComponent)
      }
      state.selectedId = newComponent.fe_id
    },
    //修改组件属性
    changeComponentProps: (
      state: ComponentsStateType,
      action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
    ) => {
      const { fe_id, newProps } = action.payload
      //找到当前要修改属性的组件
      const curComp = state.componentList.find(c => c.fe_id === fe_id)
      if (curComp) {
        curComp.props = { ...curComp.props, ...newProps }
      }
    },
    //删除选中的组件
    removeSelectedComponent: (state: ComponentsStateType) => {
      const { componentList = [], selectedId: removedId } = state

      //重新计算 selectedId, 删除后selectedId会自动定位到下一个组件
      const newSelectedId = getNextSelectedId(removedId, componentList)
      state.selectedId = newSelectedId

      const index = componentList.findIndex(c => c.fe_id === removedId)
      componentList.splice(index, 1)
    },
    //隐藏/显示组件
    changeComponentHidden: (
      state: ComponentsStateType,
      action: PayloadAction<{ fe_id: string; isHidden: boolean }>
    ) => {
      const { componentList = [] } = state
      const { fe_id, isHidden } = action.payload

      //重新计算selectedId
      let newSelected = ''
      if (isHidden) {
        //要隐藏
        newSelected = getNextSelectedId(fe_id, componentList)
      } else {
        //要显示
        newSelected = fe_id
      }
      state.selectedId = newSelected

      const curComp = componentList.find(c => c.fe_id === fe_id)
      if (curComp) {
        curComp.isHidden = isHidden
      }
    },
  },
})

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps,
  removeSelectedComponent,
  changeComponentHidden,
} = componentsSlice.actions

export default componentsSlice.reducer
