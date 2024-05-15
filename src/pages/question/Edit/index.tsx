import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'

const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div className={styles.container}>
      {/* 上布局 */}
      <div style={{ backgroundColor: '#fff', height: '40px' }}>Header</div>
      {/* 下布局 */}
      <div className={styles['content-wrapper']}>
        {/* 下布局的主体的容器 */}
        <div className={styles.content}>
          {/* 左 */}
          <div className={styles.left}>Left</div>
          {/* 中 */}
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas />
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
