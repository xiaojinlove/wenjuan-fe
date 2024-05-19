import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/QuestionComponents'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
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
  },
})

export const { resetComponents, changeSelectedId, addComponent, changeComponentProps } =
  componentsSlice.actions

export default componentsSlice.reducer
