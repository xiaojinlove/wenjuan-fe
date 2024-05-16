import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '../../../store/componentsReducer'
import LeftPanel from './LeftPanel'

const Edit: FC = () => {
  const { loading } = useLoadQuestionData()
  const dispatch = useDispatch()
  function clearSelectedId() {
    dispatch(changeSelectedId(''))
  }
  return (
    <div className={styles.container}>
      {/* 上布局 */}
      <div style={{ backgroundColor: '#fff', height: '40px' }}>Header</div>
      {/* 下布局 */}
      <div className={styles['content-wrapper']}>
        {/* 下布局的主体的容器 */}
        <div className={styles.content}>
          {/* 左 */}
          <div className={styles.left}>
            <LeftPanel />
          </div>
          {/* 中 */}
          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          {/* 右 */}
          <div className={styles.right}>Right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
