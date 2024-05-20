import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import {
  copySelectedComponent,
  pasteCopiedComponnet,
  removeSelectedComponent,
} from '../store/componentsReducer'

/**
 * 判断 activeElem是否合法
 */
function isActiveElementValid() {
  const activeElem = document.activeElement
  if (activeElem === document.body) return true //光标没有focus到input
  return false
}
function useBindCanvasKeyPress() {
  const dispatch = useDispatch()

  //删除组件
  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElementValid()) return
    dispatch(removeSelectedComponent())
  })
  //复制
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isActiveElementValid()) return
    dispatch(copySelectedComponent())
  })
  //粘贴
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isActiveElementValid()) return
    dispatch(pasteCopiedComponnet())
  })
}

export default useBindCanvasKeyPress
