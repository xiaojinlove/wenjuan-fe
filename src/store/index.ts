import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'

export type StateType = {
  user: UserStateType
}
export default configureStore({
  reducer: {
    user: userReducer,

    //组件列表

    //问卷信息 title desc...
  },
})
